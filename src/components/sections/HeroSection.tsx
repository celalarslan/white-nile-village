'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/types';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';
import { UsersThree as Users, FileText, Tree as Trees, GlobeHemisphereEast as Globe } from '@phosphor-icons/react';

interface HeroSectionProps {
  locale: Locale;
  dict: any;
}

const HERO_CONTENT = {
  en: {
    badge: "White Nile State Initiative, Sudan",
    title: "Building Sustainable Rural Development Around Gum Arabic",
    desc: "A community-led initiative empowering rural villages in White Nile State. We begin with respectful household registration, followed by practical training, sustainable acacia tree care, agricultural support, livestock care, and cooperative organization.",
    registerBtn: "Register a Household",
    partnerBtn: "Become a Partner",
    trustLine: "Community-led • Data-driven • Training-first",
    card1Title: "Target",
    card1Value: "500 Households",
    card2Title: "Focus",
    card2Value: "Gum Arabic Trees",
    card3Title: "Model",
    card3Value: "Training + Data + Cooperative",
  },
  ar: {
    badge: "مبادرة ولاية النيل الأبيض، السودان",
    title: "بناء تنمية ريفية مستدامة حول إنتاج الصمغ العربي",
    desc: "مبادرة مجتمعية لتمكين القرى الريفية في ولاية النيل الأبيض. نبدأ بتسجيل الأسر، يليه التدريب العملي، رعاية أشجار الهشاب والطلح، الدعم الزراعي والبيطري، والتنظيم التعاوني.",
    registerBtn: "تسجيل أسرة ريفية",
    partnerBtn: "كن شريكاً معنا",
    trustLine: "قيادة مجتمعية • تعتمد على البيانات • التدريب أولاً",
    card1Title: "الهدف",
    card1Value: "٥٠٠ أسرة ريفية",
    card2Title: "التركيز",
    card2Value: "أشجار الصمغ العربي",
    card3Title: "النموذج",
    card3Value: "تدريب + بيانات + تعاونيات",
  }
};

export default function HeroSection({ locale }: HeroSectionProps) {
  const rtl = isRTL(locale);
  const [visible, setVisible] = useState(false);
  const t = locale === 'ar' ? HERO_CONTENT.ar : HERO_CONTENT.en;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative bg-gradient-to-b from-[#FAF7EF] via-[#FAF7EF] to-[#F4E8D0]/40 overflow-hidden py-16 lg:py-24 border-b border-[#E8E5DD]/45"
    >
      <div className="ngo-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className={cn(
            "lg:col-span-7 space-y-6 text-center lg:text-start transition-all duration-1000 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            
            {/* Top Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAF7EF] border border-[#E8E5DD] text-[10px] font-bold text-primary-850 uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5 text-earth-600" />
              {t.badge}
            </span>

            {/* Main H1 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-900 leading-tight">
              {t.title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-semibold max-w-2xl mx-auto lg:mx-0">
              {t.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/${locale}/registration`}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-xs py-3.5"
              >
                <Users className="w-4 h-4" />
                {t.registerBtn}
              </Link>
              <Link
                href={`/${locale}/support`}
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-xs py-3.5"
              >
                {t.partnerBtn}
              </Link>
            </div>

            {/* Small Trust Line */}
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {t.trustLine}
            </p>
          </div>

          {/* Right Column - Image Card & Floating/Stacked Cards */}
          <div className={cn(
            "lg:col-span-5 relative w-full flex justify-center transition-all duration-1000 ease-out delay-100",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <div className="flex flex-col items-center w-full max-w-md">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft border border-[#E8E5DD]/40 bg-white p-2 shrink-0">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-gray-150">
                  <Image
                    src="/nile1.webp"
                    alt="White Nile Agriculture and Acacia Care"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Floating Card 1 - Target (Desktop/Tablet Only) */}
                <div className={cn(
                  "hidden md:flex absolute bg-white/95 backdrop-blur-xs rounded-xl shadow-soft p-3.5 border border-gray-105 items-center gap-3",
                  rtl ? "top-8 -start-6" : "top-8 -start-6"
                )}>
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-800">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{t.card1Title}</span>
                    <span className="text-xs font-extrabold text-gray-900">{t.card1Value}</span>
                  </div>
                </div>

                {/* Floating Card 2 - Focus (Desktop/Tablet Only) */}
                <div className={cn(
                  "hidden md:flex absolute bg-white/95 backdrop-blur-xs rounded-xl shadow-soft p-3.5 border border-gray-105 items-center gap-3",
                  rtl ? "bottom-24 -end-6" : "bottom-24 -end-6"
                )}>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7EF] flex items-center justify-center text-earth-650">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{t.card2Title}</span>
                    <span className="text-xs font-extrabold text-gray-900">{t.card2Value}</span>
                  </div>
                </div>

                {/* Floating Card 3 - Model (Desktop/Tablet Only) */}
                <div className={cn(
                  "hidden md:flex absolute bg-white/95 backdrop-blur-xs rounded-xl shadow-soft p-3.5 border border-gray-105 items-center gap-3 w-[200px]",
                  rtl ? "bottom-6 -start-6" : "bottom-6 -start-6"
                )}>
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-800">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{t.card3Title}</span>
                    <span className="text-[10px] font-extrabold text-gray-900 block truncate">{t.card3Value}</span>
                  </div>
                </div>
              </div>

              {/* Mobile-only stacked badges below image */}
              <div className="grid grid-cols-1 gap-3 mt-6 w-full md:hidden">
                <div className="bg-white rounded-xl shadow-soft p-3 border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-800">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{t.card1Title}</span>
                    <span className="text-xs font-extrabold text-gray-900">{t.card1Value}</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-soft p-3 border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7EF] flex items-center justify-center text-earth-650">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{t.card2Title}</span>
                    <span className="text-xs font-extrabold text-gray-900">{t.card2Value}</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-soft p-3 border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-800">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{t.card3Title}</span>
                    <span className="text-xs font-extrabold text-gray-900">{t.card3Value}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
