// ============================================================
// Dictionary Loader
// Dynamic imports for code-splitting per locale
// ============================================================

import { Locale } from '@/lib/types';

const dictionaries = {
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

/**
 * Load the translation dictionary for a given locale.
 * Uses dynamic imports so only the needed locale bundle is loaded.
 */
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
