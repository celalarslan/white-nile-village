import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { programDetails } from '@/lib/data/programDetails';
import { Locale } from '@/lib/types';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';
import { 
  ArrowLeft, Target, Lightbulb, UsersThree as Users, CheckCircle, 
  Leaf, BookOpen, ShieldCheck, ChartLineUp, Path, Handshake, Shield,
  Info
} from '@phosphor-icons/react/dist/ssr';

interface ProgramPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const program = programDetails.find((p) => p.id === id || p.slug === id);
  if (!program) return { title: 'Not Found' };
  
  return {
    title: locale === 'ar' ? program.titleAr : program.titleEn,
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { locale, id } = await params;
  const program = programDetails.find((p) => p.id === id || p.slug === id);
  
  if (!program) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const rtl = isRTL(locale as Locale);
  
  const isAr = locale === 'ar';
  const labels = dict.programDetails as any;

  // Helpers to get localized fields
  const title = isAr ? program.titleAr : program.titleEn;
  const shortSummary = isAr ? program.shortSummaryAr : program.shortSummaryEn;
  const category = isAr ? program.categoryAr : program.categoryEn;
  
  const primaryFocus = isAr ? program.primaryFocusAr : program.primaryFocusEn;
  const targetGroup = isAr ? program.targetGroupAr : program.targetGroupEn;
  const expectedImpact = isAr ? program.expectedImpactAr : program.expectedImpactEn;

  const brief = isAr ? program.briefAr : program.briefEn;
  const whyItMatters = isAr ? program.whyItMattersAr : program.whyItMattersEn;
  const objectives = isAr ? program.objectivesAr : program.objectivesEn;
  const beneficiaries = isAr ? program.beneficiariesAr : program.beneficiariesEn;
  const activities = isAr ? program.activitiesAr : program.activitiesEn;
  const trainingModules = isAr ? program.trainingModulesAr : program.trainingModulesEn;
  const implementationPathway = isAr ? program.implementationPathwayAr : program.implementationPathwayEn;
  const expectedOutcomes = isAr ? program.expectedOutcomesAr : program.expectedOutcomesEn;
  const measurableIndicators = isAr ? program.measurableIndicatorsAr : program.measurableIndicatorsEn;
  const safeguards = isAr ? program.safeguardsAr : program.safeguardsEn;
  const partnerOpportunities = isAr ? program.partnerOpportunitiesAr : program.partnerOpportunitiesEn;

  return (
    <div className={cn("bg-ivory-50 min-h-screen pb-24 font-sans", isAr ? "font-cairo" : "")} dir={rtl ? 'rtl' : 'ltr'}>
      {/* 3.1 Page Hero (Editorial style) */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/50 to-white/20 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="w-full lg:w-7/12 space-y-6 lg:space-y-8 rtl:lg:pr-0 rtl:lg:pl-8">
            <Link
              href={`/${locale}/programs`}
              className="inline-flex items-center text-forest-600 hover:text-forest-700 bg-forest-50 hover:bg-forest-100 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm mb-2"
            >
              <ArrowLeft className={cn("w-4 h-4", rtl ? "ml-2 rotate-180" : "mr-2")} weight="bold" />
              {dict?.nav?.programs ?? 'Back to Programs'}
            </Link>
            
            <div className="space-y-4">
              <div className="text-sm font-bold tracking-widest text-earth-500 uppercase">
                {category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.2] lg:leading-[1.15]">
                {title}
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
              {shortSummary}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-forest-50/80 border border-forest-100 px-4 py-2.5 rounded-2xl shadow-sm">
                <Target className="w-5 h-5 text-forest-600" weight="duotone" />
                <span className="text-sm font-bold text-forest-900">{primaryFocus}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-earth-50/80 border border-earth-100 px-4 py-2.5 rounded-2xl shadow-sm">
                <Users className="w-5 h-5 text-earth-600" weight="duotone" />
                <span className="text-sm font-bold text-earth-900">{targetGroup}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-blue-50/80 border border-blue-100 px-4 py-2.5 rounded-2xl shadow-sm">
                <ChartLineUp className="w-5 h-5 text-blue-600" weight="duotone" />
                <span className="text-sm font-bold text-blue-900">{expectedImpact}</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
              <Image
                src={program.heroImage || '/nile1.webp'}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                priority
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -left-10 rtl:left-auto rtl:-right-10 w-64 h-64 bg-earth-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 rtl:right-auto rtl:-left-10 w-64 h-64 bg-forest-200/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Grid Container */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 mt-12 md:mt-16 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-16 items-start">
          
          {/* Main Content Area (8 columns) */}
          <div className="w-full lg:w-[65%] space-y-16 lg:space-y-24">
            
            {/* 3.2 Program Brief */}
            <section className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900">{labels?.programBrief ?? 'Program Brief'}</h2>
              <div className="text-lg text-gray-700 leading-[1.8] space-y-6">
                {brief.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </section>

            {/* 3.3 Why This Program Matters */}
            <section className="bg-[#fcfaf7] p-8 md:p-10 rounded-[2rem] border border-[#f3ead8] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-earth-100/30 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-4 relative z-10 mb-6">
                <div className="bg-earth-100/80 p-3 rounded-2xl text-earth-700 shadow-sm">
                  <Lightbulb className="w-6 h-6" weight="duotone" />
                </div>
                {labels?.whyThisProgramMatters ?? 'Why This Program Matters'}
              </h2>
              <div className="text-lg text-gray-700 leading-[1.8] space-y-5 relative z-10">
                {whyItMatters.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </section>

            {/* 3.4 Objectives */}
            {objectives && objectives.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <Target className="w-7 h-7 text-forest-600" weight="duotone" />
                  {labels?.coreObjectives ?? 'Core Objectives'}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-gray-100/80 items-start hover:shadow-md transition-shadow">
                      <CheckCircle className="w-7 h-7 text-forest-500 shrink-0 mt-0.5" weight="fill" />
                      <span className="text-gray-800 font-medium leading-[1.6]">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 3.6 Activities Grid */}
            {activities && activities.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <Leaf className="w-7 h-7 text-forest-600" weight="duotone" />
                  {labels?.keyActivities ?? 'Key Activities'}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                  {activities.map((act, i) => (
                    <li key={i} className="flex gap-4 bg-white p-6 rounded-2xl shadow-soft border border-gray-100 items-start hover:border-forest-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center shrink-0 border border-forest-100/50">
                        <span className="text-forest-600 font-bold text-sm">{i + 1}</span>
                      </div>
                      <span className="text-gray-700 font-medium leading-[1.6] pt-1.5">{act}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 3.7 Training Modules */}
            {trainingModules && trainingModules.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-earth-600" weight="duotone" />
                  {labels?.trainingModules ?? 'Training Modules'}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                  {trainingModules.map((mod, i) => {
                    const parts = mod.split('—');
                    const modTitle = parts[0];
                    const modDesc = parts[1] || '';
                    return (
                      <li key={i} className="bg-white p-6 md:p-7 rounded-[1.5rem] border border-gray-100 shadow-soft hover:shadow-md transition-shadow group">
                        <div className="flex items-start gap-4">
                          <div className="p-2.5 bg-earth-50 rounded-xl text-earth-600 group-hover:bg-earth-100 transition-colors shrink-0">
                            <BookOpen className="w-5 h-5" weight="bold" />
                          </div>
                          <div>
                            <span className="font-bold text-gray-900 block mb-2 text-base leading-tight">
                              {modTitle}
                            </span>
                            {modDesc && (
                              <span className="text-gray-600 text-sm leading-[1.6] block">{modDesc}</span>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {/* 3.8 Implementation Pathway */}
            {implementationPathway && implementationPathway.length > 0 && (
              <section className="space-y-10">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <Path className="w-7 h-7 text-forest-600" weight="duotone" />
                  {labels?.implementationPathway ?? 'Implementation Pathway'}
                </h2>
                
                <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-soft">
                  <div className="relative border-s-2 border-gray-200 ml-5 rtl:ml-0 rtl:mr-5 rtl:border-s-0 rtl:border-r-2 space-y-12">
                    {implementationPathway.map((step, i) => (
                      <div key={i} className="ms-10 rtl:ms-0 rtl:mr-10 relative">
                        <span className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-[3.25rem] rtl:-start-auto rtl:-end-[3.25rem] ring-4 ring-white border-2 border-forest-200 shadow-sm top-0 translate-y-[-20%]">
                          <span className="text-base font-black text-forest-600">{i + 1}</span>
                        </span>
                        <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                          <h3 className="font-bold text-gray-800 text-lg leading-snug">{step}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 3.9 Expected Outcomes & 3.10 Indicators */}
            {((expectedOutcomes && expectedOutcomes.length > 0) || (measurableIndicators && measurableIndicators.length > 0)) && (
              <section className="bg-forest-50/80 rounded-[2.5rem] p-8 md:p-12 border border-forest-100/50 shadow-sm">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                  {expectedOutcomes && expectedOutcomes.length > 0 && (
                    <div className="space-y-8">
                      <h3 className="text-xl font-extrabold text-forest-900 flex items-center gap-3">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm"><CheckCircle className="w-6 h-6 text-forest-600" weight="fill" /></div>
                        {labels?.expectedOutcomes ?? 'Expected Outcomes'}
                      </h3>
                      <ul className="space-y-5">
                        {expectedOutcomes.map((out, i) => (
                          <li key={i} className="flex gap-4 bg-white/60 p-4 rounded-xl items-start">
                            <CheckCircle className="w-6 h-6 text-forest-500 shrink-0 mt-0.5" weight="duotone" />
                            <span className="text-forest-900 font-medium leading-[1.6]">{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {measurableIndicators && measurableIndicators.length > 0 && (
                    <div className="space-y-8">
                      <h3 className="text-xl font-extrabold text-forest-900 flex items-center gap-3">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm"><ChartLineUp className="w-6 h-6 text-earth-600" weight="fill" /></div>
                        {labels?.measurableIndicators ?? 'Measurable Indicators'}
                      </h3>
                      <ul className="space-y-5">
                        {measurableIndicators.map((ind, i) => (
                          <li key={i} className="flex gap-4 bg-white/60 p-4 rounded-xl items-start">
                            <ChartLineUp className="w-6 h-6 text-earth-600 shrink-0 mt-0.5" weight="duotone" />
                            <span className="text-forest-900 font-medium leading-[1.6]">{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 3.11 Safeguards */}
            {safeguards && safeguards.length > 0 && (
              <section className="space-y-8 bg-[#f8f9fa] p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-soft mb-12">
                <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl text-gray-500 shadow-sm">
                    <ShieldCheck className="w-6 h-6" weight="duotone" />
                  </div>
                  {labels?.safeguardsPrinciples ?? 'Safeguards & Principles'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {safeguards.map((safe, i) => (
                    <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm items-start">
                      <Info className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" weight="fill" />
                      <span className="text-gray-700 font-medium leading-[1.6] text-sm">{safe}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar Area (4 columns) - Sticky on desktop */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-24 space-y-8">
            
            {/* Target Beneficiaries (Soft Cream box) */}
            {beneficiaries && beneficiaries.length > 0 && (
              <div className="bg-[#fcfaf7] rounded-[2rem] p-8 border border-[#f3ead8] shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-earth-600 mb-6 flex items-center gap-3">
                  <Users className="w-5 h-5" weight="bold" />
                  {labels?.targetBeneficiaries ?? 'Target Beneficiaries'}
                </h3>
                <ul className="space-y-4">
                  {beneficiaries.map((ben, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-100/80 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-earth-400 shrink-0" />
                      <span className="text-gray-800 font-medium text-sm leading-snug">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Call to Actions */}
            <div className="space-y-4">
              {/* CTA Register */}
              <div className="bg-earth-600 rounded-[2rem] shadow-md p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />
                <div className="relative z-10">
                  <h4 className="text-xl font-extrabold text-white mb-3 leading-tight">
                    {labels?.startRegistration ?? 'Start Registration'}
                  </h4>
                  <p className="text-earth-50/90 mb-6 leading-relaxed text-sm">
                    {dict?.registration?.subtitle ?? 'Register your household or local group to participate in this development program.'}
                  </p>
                  <Link
                    href={`/${locale}/registration`}
                    className="flex justify-center items-center w-full bg-white text-earth-700 hover:bg-earth-50 font-bold py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md"
                  >
                    {labels?.startRegistration ?? 'Start Registration'}
                  </Link>
                </div>
              </div>

              {/* Partner Support Box */}
              <div className="bg-forest-900 rounded-[2rem] shadow-md p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-forest-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                      <Handshake className="w-6 h-6" weight="duotone" />
                    </div>
                    <h4 className="text-xl font-extrabold text-white leading-tight">
                      {labels?.supportThisProgram ?? 'Support This Program'}
                    </h4>
                  </div>
                  <p className="text-forest-100/90 mb-6 leading-relaxed text-sm">
                    {partnerOpportunities}
                  </p>
                  <Link
                    href={`/${locale}/support`}
                    className="flex justify-center items-center w-full bg-forest-600 hover:bg-forest-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md border border-forest-500"
                  >
                    {dict?.nav?.support ?? 'Become a Partner'}
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
