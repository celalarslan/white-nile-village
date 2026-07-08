'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List as Menu, X, GlobeHemisphereEast as Globe, CaretDown as ChevronDown } from '@phosphor-icons/react';
import { Locale } from '@/lib/types';
import { isRTL, localeConfigs } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

interface HeaderProps {
  locale: Locale;
  dict: any;
}

interface NavItem {
  key: string;
  type: 'link' | 'dropdown';
  children?: string[];
}

const NAV_STRUCTURE: NavItem[] = [
  { key: 'home', type: 'link' },
  { key: 'about', type: 'link' },
  { key: 'whatWeDo', type: 'dropdown', children: ['programs', 'projects', 'training'] },
  { key: 'joinOps', type: 'dropdown', children: ['registration', 'transparency'] },
  { key: 'news', type: 'link' },
  { key: 'contact', type: 'link' },
];

function getNavHref(locale: Locale, key: string): string {
  if (key === 'home') return `/${locale}`;
  return `/${locale}/${key}`;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const rtl = isRTL(locale);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const switchLocale = () => {
    const currentPath = window.location.pathname;
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath || `/${newLocale}`;
  };

  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  const otherLocaleLabel = localeConfigs[otherLocale].nativeName;

  return (
    <>
      <header
        dir={rtl ? 'rtl' : 'ltr'}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 border-b',
          scrolled 
            ? 'bg-[#FAF7EF]/90 backdrop-blur-md shadow-soft border-[#E8E5DD]/30 h-20' 
            : 'bg-[#FAF7EF]/95 border-transparent h-20'
        )}
      >
        <div className="mx-auto flex max-w-7xl h-full items-center justify-between px-4 lg:px-8">
          {/* Logo & Institution Name */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 text-primary-950 transition-opacity hover:opacity-90 shrink-0"
          >
            <div className="relative h-10 w-10 md:h-11 md:w-11 flex-shrink-0 p-0.5 bg-white rounded-lg shadow-soft border border-gray-150/40">
              <Image src="/WNDEO-logo.webp" alt="WNDEO Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold leading-none text-primary-900 tracking-tight md:text-base">
                {dict?.site?.name ?? 'White Nile Development'}
              </span>
              <span className="text-[9px] text-gray-500 font-semibold tracking-wider mt-1 hidden sm:block leading-none">
                {dict?.site?.tagline ?? 'Towards Sustainable Rural Development'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:flex h-full">
            <nav className="flex items-center gap-1.5 h-full">
              {NAV_STRUCTURE.map((item) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.key}
                      href={getNavHref(locale, item.key)}
                      className={cn(
                        'rounded-lg px-3.5 py-2 text-xs font-bold text-gray-755 transition-all duration-200',
                        'hover:bg-primary-50/50 hover:text-primary-800'
                      )}
                    >
                      {dict?.nav?.[item.key] ?? item.key}
                    </Link>
                  );
                }

                // Dropdown Nav Item
                return (
                  <div
                    key={item.key}
                    className="relative group py-6 h-full flex items-center"
                    onMouseEnter={() => setOpenDropdown(item.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3.5 py-2 text-xs font-bold text-gray-755 transition-all duration-200',
                        'hover:bg-primary-50/50 hover:text-primary-800 cursor-pointer'
                      )}
                    >
                      <span>{dict?.nav?.[item.key] ?? item.key}</span>
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200 text-gray-400", openDropdown === item.key && "rotate-180")} />
                    </button>

                    {/* Dropdown Box */}
                    <div
                      className={cn(
                        "absolute top-full start-0 z-50 w-56 pt-1 transition-all duration-200 origin-top-left",
                        openDropdown === item.key ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="bg-white rounded-xl shadow-soft border border-gray-150/40 p-1.5 space-y-0.5">
                        {item.children?.map((childKey) => (
                          <Link
                            key={childKey}
                            href={getNavHref(locale, childKey)}
                            className={cn(
                              'block rounded-lg px-3.5 py-2.5 text-xs font-bold text-gray-600 transition-all duration-200',
                              'hover:bg-primary-50 hover:text-primary-850'
                            )}
                          >
                            {dict?.nav?.[childKey] ?? childKey}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Language Switcher & Primary CTA */}
            <div className="flex items-center gap-4 border-s border-[#E8E5DD]/70 ps-4">
              {/* Language Switcher */}
              <button
                onClick={switchLocale}
                className={cn(
                  'flex items-center gap-1.5 rounded-lg px-3 py-2',
                  'text-xs font-bold text-gray-600 transition-all duration-200 hover:bg-primary-50/50 hover:text-primary-800 cursor-pointer'
                )}
                aria-label={`Switch to ${otherLocaleLabel}`}
              >
                <Globe className="h-3.5 w-3.5 text-earth-600" />
                <span>{otherLocaleLabel}</span>
              </button>

              {/* Institution CTA (Register Household) */}
              <Link
                href={`/${locale}/registration`}
                className="btn-primary flex items-center justify-center text-[10px] font-bold px-4 py-2.5 shadow-soft hover:bg-primary-950 transition-all cursor-pointer whitespace-nowrap"
              >
                {dict?.nav?.registerHousehold ?? 'Register Household'}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-700 transition-all hover:bg-gray-100 lg:hidden border border-gray-100/50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" dir={rtl ? 'rtl' : 'ltr'}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div
            className={cn(
              'absolute top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300',
              'overflow-y-auto flex flex-col',
              rtl ? 'right-0' : 'left-0'
            )}
            style={{
              animation: rtl
                ? 'slideInRight 0.25s ease-out'
                : 'slideInLeft 0.25s ease-out',
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
              <Link
                href={`/${locale}`}
                className="flex items-center gap-2 text-primary-900"
                onClick={() => setMobileOpen(false)}
              >
                <div className="relative h-8 w-8">
                  <Image src="/WNDEO-logo.webp" alt="WNDEO Logo" fill className="object-contain" />
                </div>
                <span className="text-sm font-extrabold">
                  {dict?.site?.name ?? 'White Nile Development'}
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 border border-gray-100"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex-1 px-4 py-5 space-y-4">
              {NAV_STRUCTURE.map((item) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.key}
                      href={getNavHref(locale, item.key)}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block rounded-lg px-3 py-2.5 text-sm font-bold text-gray-800 transition-colors',
                        'hover:bg-primary-50/50 hover:text-primary-800'
                      )}
                    >
                      {dict?.nav?.[item.key] ?? item.key}
                    </Link>
                  );
                }

                return (
                  <div key={item.key} className="space-y-1">
                    <span className="block px-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                      {dict?.nav?.[item.key] ?? item.key}
                    </span>
                    <div className="pl-2 rtl:pl-0 rtl:pr-2 space-y-0.5 mt-1.5">
                      {item.children?.map((childKey) => (
                        <Link
                          key={childKey}
                          href={getNavHref(locale, childKey)}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'block rounded-lg px-3 py-2 text-xs font-semibold text-gray-650 transition-colors',
                            'hover:bg-primary-50/50 hover:text-primary-800'
                          )}
                        >
                          {dict?.nav?.[childKey] ?? childKey}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Support Us / Registration CTA in Mobile Menu */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={`/${locale}/registration`}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center rounded-lg bg-primary-800 py-3 text-sm font-bold text-white shadow-soft hover:bg-primary-950"
                >
                  {dict?.nav?.registerHousehold ?? 'Register Household'}
                </Link>
              </div>
            </nav>

            {/* Mobile Language Switcher */}
            <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  switchLocale();
                }}
                className={cn(
                  'flex w-full items-center justify-center gap-1.5 rounded-lg',
                  'border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold',
                  'text-gray-700 shadow-sm transition-all hover:bg-gray-50'
                )}
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{otherLocaleLabel}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe Animations */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
