// ============================================================
// Next.js Middleware — i18n Locale Routing
// Redirects requests without a locale prefix to the default locale.
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n/config';

/** Paths that should bypass locale routing */
const IGNORED_PREFIXES = ['/admin', '/api', '/_next', '/favicon.ico', '/images'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip ignored paths (static assets, API routes, admin panel, etc.)
  if (
    IGNORED_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    /\.(png|jpg|jpeg|svg|gif|webp|ico)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if the path already starts with a supported locale
  const hasLocalePrefix = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // Redirect to the default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Match all paths except static files and internal Next.js paths
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)).*)'],
};
