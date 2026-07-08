import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import { news } from '@/lib/data/mockData';
import { getLocalizedField, formatDate } from '@/lib/utils';
import { CalendarBlank as Calendar, Tag, Image as ImageIcon } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.news?.title as string} | ${dict.site?.name as string}`,
  };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{dict.news?.title as string}</h1>
          <p className="text-xl text-gray-600">{dict.news?.subtitle as string}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative group">
                <ImageIcon className="w-12 h-12 text-gray-300" />
                <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4 space-x-reverse">
                  <span className="flex items-center bg-primary-50 text-primary-700 px-2 py-1 rounded-md text-xs font-medium">
                    <Tag className="w-3 h-3 me-1" />
                    {item.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 me-1" />
                    {formatDate(item.date, locale as Locale)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {getLocalizedField(item, 'title', locale as Locale)}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                  {getLocalizedField(item, 'content', locale as Locale)}
                </p>
                <Link href={`/${locale}/news#${item.slug}`} className="text-primary-600 font-medium hover:text-primary-700 mt-auto inline-flex items-center">
                  {dict.news?.readMore as string}
                  <span className="mx-1">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
