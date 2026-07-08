// ============================================================
// Shared Utility Functions
// ============================================================

import { Locale } from '@/lib/types';

/**
 * Generate an application number in the format WND-YYYY-XXXXX
 * e.g. WND-2026-00042
 */
export function generateApplicationNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `WND-${year}-${random}`;
}

/**
 * Generate a certificate number in the format CERT-YYYY-XXXXX
 * e.g. CERT-2026-73291
 */
export function generateCertificateNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `CERT-${year}-${random}`;
}

/**
 * Format a date string according to the given locale.
 * Uses Intl.DateTimeFormat for proper Arabic/English formatting.
 */
export function formatDate(date: string, locale: Locale): string {
  try {
    const dateObj = new Date(date);
    const localeString = locale === 'ar' ? 'ar-SD' : 'en-US';
    return new Intl.DateTimeFormat(localeString, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(dateObj);
  } catch {
    return date;
  }
}

/**
 * Merge CSS class names, filtering out falsy values.
 * A lightweight alternative to clsx/classnames.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get a localized field from an object that has both Arabic and English versions.
 * For example, getLocalizedField(program, 'title', 'ar') returns program.titleAr
 *
 * @param obj - The object containing localized fields
 * @param field - The base field name (e.g. 'title', 'description')
 * @param locale - The current locale
 * @returns The localized field value, or an empty string if not found
 */
export function getLocalizedField(
  obj: any,
  field: string,
  locale: Locale,
): string {
  const suffix = locale === 'ar' ? 'Ar' : 'En';
  const key = `${field}${suffix}`;
  const value = obj[key];
  return typeof value === 'string' ? value : '';
}
