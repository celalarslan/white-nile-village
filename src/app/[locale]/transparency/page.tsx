import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import StatCard from '@/components/ui/StatCard';
import { dashboardStats } from '@/lib/data/mockData';
import { isRTL } from '@/lib/i18n/config';
import { Sparkle as Sparkles, UsersThree as Users, Medal as Award, ShieldCheck as Shield, FileText, Tree as Trees, PiggyBank } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.transparency?.title as string} | ${dict.site?.name as string}`,
  };
}

export default async function TransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const rtl = isRTL(locale as Locale);

  const stats = [
    {
      label: dict.transparency?.registeredFamilies as string,
      value: dashboardStats.totalFamilies,
      target: 500,
      color: 'green',
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.trainedPeople as string,
      value: dashboardStats.trainedPeople,
      target: 200,
      color: 'navy',
      icon: <Award className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.womenParticipants as string,
      value: dashboardStats.womenCount,
      target: 150,
      color: 'navy',
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.youthParticipants as string,
      value: dashboardStats.youthCount,
      target: 150,
      color: 'navy',
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.totalTrees as string,
      value: dashboardStats.totalGumArabicTrees,
      target: 1000,
      color: 'green',
      icon: <Trees className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.totalAnimals as string,
      value: dashboardStats.totalCattle + dashboardStats.totalSheepGoat,
      target: 500,
      color: 'navy',
      icon: <Shield className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.plantedSeedlings as string,
      value: 1200,
      target: 5000,
      color: 'green',
      icon: <Trees className="w-4 h-4" />,
    },
    {
      label: dict.transparency?.grantsReceived as string,
      value: '$12,500',
      color: 'green',
      icon: <PiggyBank className="w-4 h-4" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-earth-600">
            Accountability &amp; Reporting
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 tracking-tight mt-3 mb-4">
            {dict.transparency?.title as string}
          </h1>
          <div className="h-0.5 w-12 bg-earth-500 mx-auto rounded-full mb-6" />
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">{dict.transparency?.subtitle as string}</p>
        </div>

        {/* Dashboard Title */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-150">
          <h2 className="text-lg font-extrabold text-gray-900">{dict.transparency?.currentStats as string}</h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-850">
            Official NGO Records
          </span>
        </div>

        {/* Stats Grid - completely borderless typography grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-20">
          {stats.map((stat, idx) => (
            <StatCard 
              key={idx}
              label={stat.label} 
              value={stat.value} 
              target={stat.target} 
              color={stat.color} 
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Documents/Reports Section - Clean institutional style */}
        <div className="bg-earth-50/20 rounded-2xl p-8 md:p-12 text-center max-w-xl mx-auto border border-earth-100">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-earth-100 text-earth-700 mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">{dict.transparency?.inPreparation as string}</h3>
          <p className="text-xs text-gray-500 mb-6 max-w-sm mx-auto">{dict.transparency?.noDataYet as string}</p>
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden max-w-xs mx-auto">
            <div className="h-full bg-earth-500 rounded-full w-2/3 animate-pulse" />
          </div>
        </div>

      </div>
    </div>
  );
}
