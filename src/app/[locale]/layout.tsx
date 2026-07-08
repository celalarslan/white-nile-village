import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, localeConfigs } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'منظمة النيل الأبيض للتنمية والبيئة | WNDEO'
      : 'White Nile Development & Environment Organization | WNDEO',
    description: isArabic
      ? 'منظمة النيل الأبيض للتنمية والبيئة (WNDEO) - منصة تنمية ريفية مجتمعية لدعم منتجي الصمغ العربي ورعاية الأشجار والتحسين التدريجي لسبل العيش في ولاية النيل الأبيض بالسودان.'
      : 'White Nile Development & Environment Organization (WNDEO) - A community-based rural development platform supporting gum arabic producers, tree care, and gradual livelihoods improvement in White Nile State, Sudan.',
    icons: {
      icon: '/WNDEO-favicon.webp',
      shortcut: '/WNDEO-favicon.webp',
      apple: '/WNDEO-favicon.webp',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale — show 404 for unsupported values
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const dir = localeConfigs[locale as Locale].dir;

  // Load the primary font for this locale, plus always load both for mixed content
  const fontLink =
    locale === 'ar'
      ? 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700;800&display=swap'
      : 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={fontLink} rel="stylesheet" />
        {/* Always load Outfit as a secondary font for Arabic pages (used in numbers, etc.) */}
        {locale === 'ar' && (
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        )}
      </head>
      <body suppressHydrationWarning>
        <Header locale={locale as Locale} dict={dict} />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
