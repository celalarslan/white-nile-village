import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/types';
import { isRTL } from '@/lib/i18n/config';

interface FooterProps {
  locale: Locale;
  dict: any;
}

function getNavHref(locale: Locale, key: string): string {
  if (key === 'home') return `/${locale}`;
  return `/${locale}/${key}`;
}

export default function Footer({ locale, dict }: FooterProps) {
  const rtl = isRTL(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      dir={rtl ? 'rtl' : 'ltr'}
      className="bg-[#123524] text-[#FAF7EF] border-t border-[#1F4D36] relative overflow-hidden"
    >
      {/* Subtle top ambient gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3F7D4A]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 — Organization */}
          <div className="space-y-5">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-2 w-fit">
              <div className="relative w-9 h-9 flex-shrink-0 bg-white rounded-lg p-0.5 border border-[#1F4D36]">
                <Image src="/WNDEO-logo.webp" alt="WNDEO Logo" fill className="object-contain" />
              </div>
              <h3 className="text-sm font-extrabold text-white tracking-tight">
                {dict?.site?.name ?? 'White Nile Development'}
              </h3>
            </Link>
            <p className="text-xs leading-relaxed text-[#FAF7EF]/85 font-medium max-w-sm">
              {dict?.footer?.description ?? 'A community-based initiative improving rural livelihoods in White Nile State, Sudan.'}
            </p>
            <div className="pt-2 border-t border-[#1F4D36]/50 max-w-xs">
              <p className="text-[10px] leading-relaxed text-[#F4E8D0]/70 font-semibold italic">
                {dict?.footer?.privacyNote ?? 'Personal data is protected and never shared publicly.'}
              </p>
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#F4E8D0] border-b border-[#1F4D36]/40 pb-2 w-fit">
              {dict?.footer?.programsTitle ?? 'Programs'}
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href={`/${locale}/programs/prog-001`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.gumArabicDev ?? 'Gum Arabic Development'}
              </Link>
              <Link
                href={`/${locale}/programs/prog-002`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.treeCare ?? 'Tree Care & Reforestation'}
              </Link>
              <Link
                href={`/${locale}/programs/prog-003`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.agriSupport ?? 'Agriculture Support'}
              </Link>
              <Link
                href={`/${locale}/programs/prog-004`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.livestockSupport ?? 'Livestock Support'}
              </Link>
              <Link
                href={`/${locale}/training`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.trainingCert ?? 'Training & Certification'}
              </Link>
            </nav>
          </div>

          {/* Column 3 — Transparency */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#F4E8D0] border-b border-[#1F4D36]/40 pb-2 w-fit">
              {dict?.footer?.transparencyTitle ?? 'Transparency'}
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href={`/${locale}/transparency`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.reports ?? 'Reports'}
              </Link>
              <Link
                href={`/${locale}/about#legal-status`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.legalStatus ?? 'Legal Status'}
              </Link>
              <Link
                href={`/${locale}/transparency`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.dataProtection ?? 'Data Protection'}
              </Link>
              <Link
                href={`/${locale}/transparency`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.partnerAccountability ?? 'Partner Accountability'}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="text-xs text-[#FAF7EF]/80 hover:text-white transition-colors w-fit font-semibold"
              >
                {dict?.footer?.hacReg ?? 'HAC Registration Process'}
              </Link>
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#F4E8D0] border-b border-[#1F4D36]/40 pb-2 w-fit">
              {dict?.footer?.contactTitle ?? 'Contact'}
            </h3>
            <div className="flex flex-col gap-3.5 text-xs text-[#FAF7EF]/85 font-semibold">
              <div className="flex items-start gap-2.5">
                <span className="text-[#F4E8D0] mt-0.5">⌂</span>
                <span>{dict?.footer?.stateSudan ?? 'White Nile State, Sudan'}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#F4E8D0] mt-0.5">✉</span>
                <span>
                  {locale === 'ar' ? 'سيتم الإعلان عن البريد الإلكتروني الرسمي لاحقاً' : 'Official email will be announced'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#F4E8D0] mt-0.5">☎</span>
                <span>
                  {locale === 'ar' ? 'سيتم الإعلان عن جهة اتصال اللجنة المحلية' : 'Local committee contact will be announced'}
                </span>
              </div>
              <div className="pt-1.5">
                <Link
                  href={`/${locale}/support`}
                  className="text-xs text-[#F4E8D0] hover:text-white transition-colors underline decoration-dotted decoration-[#3F7D4A] hover:decoration-white font-bold"
                >
                  {dict?.footer?.partnerInquiry ?? 'Partner Inquiry'} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#1F4D36]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <p className="text-[10px] text-[#FAF7EF]/60 font-semibold">
            © {currentYear} {dict?.site?.name ?? 'WNDEO'}. {dict?.footer?.rights ?? 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-4 text-[10px] text-[#F4E8D0]/60 font-bold uppercase tracking-wider">
            <span>
              {locale === 'ar' 
                ? 'سيتم نشر تفاصيل التسجيل القانوني والتفويض المحلي بعد اكتمال الإجراءات الرسمية.' 
                : 'Legal registration and local authorization details will be published after official completion.'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
