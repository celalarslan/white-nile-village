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
  const [isSupported, setIsSupported] = useState(false);
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
    window.speechSynthesis.cancel();
    globalUtterance = null;
    globalStop = null;
    if (isMounted.current) setIsSpeaking(false);
  }, []);

  const speak = useCallback(() => {
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
    if (isSpeaking) {
      stop();
    } else {
      speak();
    }
  };

  if (!isSupported) return null;

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
      aria-label={label}
      title={label}
      className={[
        'inline-flex items-center gap-1.5 mt-3',
        'text-[11px] font-bold uppercase tracking-widest',
        'text-gray-400 hover:text-primary-700',
        'transition-colors duration-150',
        'select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded',
        isSpeaking ? 'text-primary-600 animate-pulse' : '',
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
