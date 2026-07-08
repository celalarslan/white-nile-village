'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { SpeakerSimpleHigh, SpeakerSimpleSlash } from '@phosphor-icons/react';

// Global singleton: only one utterance across all button instances
let globalUtterance: SpeechSynthesisUtterance | null = null;
let globalStop: (() => void) | null = null;

interface TextToSpeechButtonProps {
  text: string;
  locale: 'en' | 'ar';
  className?: string;
}

export default function TextToSpeechButton({
  text,
  locale,
  className = '',
}: TextToSpeechButtonProps) {
  // null indicates hydration hasn't happened yet
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    isMounted.current = true;

    // Stop speech on unmount (route/page change)
    return () => {
      isMounted.current = false;
      if (globalStop) globalStop();
    };
  }, []);

  const stop = useCallback(() => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    globalUtterance = null;
    globalStop = null;
    if (isMounted.current) setIsSpeaking(false);
  }, []);

  const speak = useCallback(() => {
    if (!window.speechSynthesis) return;

    // Stop any other currently playing speech first
    if (globalStop) globalStop();

    const utterance = new SpeechSynthesisUtterance(text);

    // Language selection
    if (locale === 'ar') {
      utterance.lang = 'ar-SA';
      utterance.rate = 0.9;
      // Try to find an Arabic voice
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(
        (v) => v.lang.startsWith('ar') || v.name.toLowerCase().includes('arabic')
      );
      if (arabicVoice) utterance.voice = arabicVoice;
    } else {
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
    }

    utterance.onstart = () => {
      if (isMounted.current) setIsSpeaking(true);
    };
    utterance.onend = () => {
      globalUtterance = null;
      globalStop = null;
      if (isMounted.current) setIsSpeaking(false);
    };
    utterance.onerror = () => {
      globalUtterance = null;
      globalStop = null;
      if (isMounted.current) setIsSpeaking(false);
    };

    globalUtterance = utterance;
    globalStop = stop;
    window.speechSynthesis.speak(utterance);
    // Immediately mark as speaking (some browsers fire onstart late)
    setIsSpeaking(true);
  }, [text, locale, stop]);

  const handleClick = () => {
    if (!isSupported) return;
    if (isSpeaking) {
      stop();
    } else {
      speak();
    }
  };

  const isChecking = isSupported === null;
  const isUnsupported = isSupported === false;

  const label =
    locale === 'ar'
      ? isSpeaking
        ? 'إيقاف'
        : 'استمع'
      : isSpeaking
      ? 'Stop'
      : 'Listen';

  return (
    <button
      onClick={handleClick}
      disabled={isChecking || isUnsupported}
      aria-label={label}
      title={isUnsupported ? 'Text-to-speech not supported in this browser' : label}
      className={[
        'inline-flex items-center gap-1.5 mt-4 px-3 py-1.5',
        'text-[11px] font-bold uppercase tracking-widest rounded-lg',
        'border transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
        (isChecking || isUnsupported) 
          ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed opacity-70' 
          : isSpeaking 
            ? 'bg-primary-50 border-primary-200 text-primary-700 animate-pulse shadow-sm' 
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary-700 hover:border-gray-300 shadow-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {isSpeaking ? (
        <SpeakerSimpleSlash className="w-3.5 h-3.5" weight="fill" />
      ) : (
        <SpeakerSimpleHigh className="w-3.5 h-3.5" />
      )}
      <span>{label}</span>
    </button>
  );
}

