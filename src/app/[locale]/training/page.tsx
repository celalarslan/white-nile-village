import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import { trainings, dashboardStats } from '@/lib/data/mockData';
import { getLocalizedField, formatDate } from '@/lib/utils';
import { Medal as Award, UsersThree as Users, CalendarBlank as Calendar, CheckCircle as CheckCircle2, CaretRight as ChevronRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.training?.title as string} | ${dict.site?.name as string}`,
  };
}

export default async function TrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const rtl = isRTL(locale as Locale);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4">{dict.training?.title as string}</h1>
          <div className="h-1 w-20 bg-earth-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-600">{dict.training?.subtitle as string}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl shadow-xl p-8 flex items-center justify-between text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-all group-hover:scale-110" />
            <div className="flex items-center gap-6">
              <div className="bg-white/15 p-5 rounded-2xl text-white backdrop-blur-md shadow-inner">
                <Users className="w-9 h-9" />
              </div>
              <div>
                <p className="text-green-200 font-bold uppercase tracking-wider text-xs mb-1">{dict.training?.totalTrained as string}</p>
                <h3 className="text-4xl font-extrabold">{dashboardStats.trainedPeople}</h3>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <Link 
            href={`/${locale}/verify-certificate`} 
            className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl shadow-xl p-8 flex items-center justify-between text-white relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-all group-hover:scale-110" />
            <div className="flex items-center gap-6">
              <div className="bg-white/15 p-5 rounded-2xl text-white backdrop-blur-md shadow-inner">
                <Award className="w-9 h-9" />
              </div>
              <div>
                <p className="text-amber-100 font-bold uppercase tracking-wider text-xs mb-1">{dict.training?.certificatesIssued as string}</p>
                <h3 className="text-4xl font-extrabold">{dashboardStats.certificateCount}</h3>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white transition-all transform rtl:rotate-180" />
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-4">
          {dict.training?.programs as string}
        </h2>
        
        {/* Programs List */}
        <div className="space-y-8">
          {trainings.map((training) => (
            <div 
              key={training.id} 
              className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8 flex flex-col lg:flex-row gap-8 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {getLocalizedField(training, 'title', locale as Locale)}
                  </h3>
                  <span className={cn(
                    "px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider",
                    training.status === 'completed' ? 'bg-green-500 text-white shadow-sm' :
                    training.status === 'ongoing' ? 'bg-blue-500 text-white shadow-sm' :
                    'bg-amber-500 text-white shadow-sm'
                  )}>
                    {(dict.training as any)?.[training.status] as string}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {getLocalizedField(training, 'description', locale as Locale)}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-50 pt-6">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                    <Calendar className="w-4 h-4 text-primary-600 shrink-0" />
                    <span className="font-semibold">{formatDate(training.date, locale as Locale)}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                    <Users className="w-4 h-4 text-earth-600 shrink-0" />
                    <span className="font-semibold">
                      {training.participantCount} / {training.maxParticipants} {(dict.common as any)?.people as string}
                    </span>
                  </div>
                </div>
              </div>

              {/* Topics Grid */}
              <div className="lg:w-80 bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col justify-center">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider border-b border-gray-200/50 pb-2">
                  {dict.training?.topics as string}
                </h4>
                <ul className="space-y-3">
                  {training.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 font-semibold gap-2">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
