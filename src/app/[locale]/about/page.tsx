import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import { ShieldCheck as Shield, UsersThree as Users, Leaf, Heart, Lightbulb, CheckCircle as CheckCircle2 } from '@phosphor-icons/react/dist/ssr';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';
import TextToSpeechButton from '@/components/ui/TextToSpeechButton';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.about?.title as string} | ${dict.site?.name as string}`,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const rtl = isRTL(locale as Locale);

  const values = [
    { key: 'value1', icon: Shield },
    { key: 'value2', icon: Users },
    { key: 'value3', icon: Leaf },
    { key: 'value4', icon: Heart },
    { key: 'value5', icon: Lightbulb },
  ];

  return (
    <div className="bg-white min-h-screen pb-24" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Editorial Title Section */}
      <div className="mx-auto max-w-3xl px-4 pt-20 pb-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary-850">
          WNDEO — White Nile Development & Environment Organization
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-3 mb-6">
          {dict.about?.title as string}
        </h1>
        <div className="h-0.5 w-12 bg-earth-500 mx-auto rounded-full" />
      </div>

      {/* Main Editorial Content */}
      <div className="mx-auto max-w-3xl px-4 mt-16 space-y-16">
        
        {/* Who We Are Section */}
        <section className="space-y-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wider text-primary-850">
            {dict.about?.whoWeAre as string}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-semibold">
            {dict.about?.whoWeAreText as string}
          </p>
          <TextToSpeechButton text={dict.about?.whoWeAreText as string} locale={locale as 'en' | 'ar'} />
        </section>

        {/* Mission & Vision Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 py-4">
          {/* Mission */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-3 text-primary-800">
              <Shield className="w-5 h-5 text-earth-600" />
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">{dict.about?.mission as string}</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              {dict.about?.missionText as string}
            </p>
            <TextToSpeechButton text={dict.about?.missionText as string} locale={locale as 'en' | 'ar'} />
          </section>

          {/* Vision */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-3 text-primary-800">
              <Leaf className="w-5 h-5 text-earth-600" />
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">{dict.about?.vision as string}</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              {dict.about?.visionText as string}
            </p>
            <TextToSpeechButton text={dict.about?.visionText as string} locale={locale as 'en' | 'ar'} />
          </section>
        </div>

        {/* Our Values Section - Line-item structure (no repeated placeholder description) */}
        <section className="space-y-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wider text-primary-850">
            {dict.about?.values as string}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <IconComponent className="w-4.5 h-4.5 text-primary-750 shrink-0" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">
                    {(dict.about as any)?.[val.key] as string}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Local Committee Section */}
        <section className="space-y-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wider text-primary-850">
            {dict.about?.committee as string}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed font-semibold">
            {dict.about?.committeeText as string}
          </p>
          <TextToSpeechButton text={dict.about?.committeeText as string} locale={locale as 'en' | 'ar'} />
        </section>

        {/* Legal Status Panel (Beige institutional warning card, no raw borders) */}
        <section className="bg-earth-50/70 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <h3 className="text-sm font-bold text-primary-950 mb-3 flex items-center gap-2 uppercase tracking-wider">
            <CheckCircle2 className="w-4.5 h-4.5 text-primary-800" />
            {dict.about?.legalStatus as string}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-semibold">
            {dict.about?.legalStatusText as string}
          </p>
        </section>

      </div>
    </div>
  );
}
