// ============================================================
// Internationalization Configuration
// ============================================================

import { Locale, LocaleConfig } from '@/lib/types';

/** Supported locales */
export const locales: Locale[] = ['ar', 'en'];

/** Default locale - Arabic since the primary audience is Sudanese */
export const defaultLocale: Locale = 'ar';

/** Full configuration for each supported locale */
export const localeConfigs: Record<Locale, LocaleConfig> = {
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
  },
};

/** Get the text direction for a given locale */
export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return localeConfigs[locale].dir;
}

/** Check if a locale uses right-to-left text direction */
export function isRTL(locale: Locale): boolean {
  return localeConfigs[locale].dir === 'rtl';
}
