import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { projects } from '@/lib/data/mockData';
import { getLocalizedField } from '@/lib/utils';
import { Locale } from '@/lib/types';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { ArrowLeft, Target, Pulse as Activity, CalendarBlank as Calendar, CheckCircle as CheckCircle2 } from '@phosphor-icons/react/dist/ssr';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${getLocalizedField(project, 'title', locale as Locale)}`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { locale, id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const rtl = isRTL(locale as Locale);
  
  const title = getLocalizedField(project, 'title', locale as Locale);
  const description = getLocalizedField(project, 'description', locale as Locale);
  const statusText = (dict?.projects?.status as any)?.[project.status] ?? project.status;

  return (
    <div className="bg-gray-50 min-h-screen pb-24" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative h-[55vh] min-h-[400px] w-full bg-black">
        <Image
          src={project.image || '/nile2.png'}
          alt={title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm transition-all"
          >
            <ArrowLeft className={cn("w-4 h-4", rtl ? "ml-2 rotate-180" : "mr-2")} />
            {dict?.nav?.projects ?? 'Back to Projects'}
          </Link>
          
          <div className="mb-4">
            <span
              className={cn(
                'inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider',
                (project.status === 'planned' || project.status === 'preparation') ? 'bg-amber-500 text-white' : 
                project.status === 'active' ? 'bg-green-500 text-white' : 
                'bg-blue-500 text-white'
              )}
            >
              {statusText}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Description */}
            <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-soft p-8 md:p-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                {(dict?.programs as any)?.about ?? 'Project Details'}
              </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 whitespace-pre-wrap">
              {description}
            </p>

            {/* Impact Indicators */}
            {project.impactIndicators && project.impactIndicators.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary-500" />
                  {dict?.projects?.impactIndicators ?? 'Impact Indicators'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.impactIndicators.map((indicator, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-gray-800 font-medium leading-tight">{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Data */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Target Audience Card */}
            <div className="bg-white rounded-3xl shadow-soft p-8 border-t-4 border-t-primary-500 border-x border-b border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">
                  {dict?.projects?.targetAudience ?? 'Target Audience'}
                </h4>
              </div>
              <p className="text-gray-600 font-medium">
                {project.targetAudience}
              </p>
            </div>

            {/* Status/Timeline Card */}
            <div className="bg-white rounded-3xl shadow-soft p-8 border-t-4 border-t-gray-500 border-x border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">
                  {(dict?.projects?.status as any)?.[project.status] ? 'Status' : 'Project Status'}
                </h4>
              </div>
              
              {/* Vertical Timeline */}
              <div className="relative border-l-2 border-gray-200 ml-4 pl-6 space-y-8 rtl:ml-0 rtl:mr-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
                
                <div className="relative">
                  <div className="absolute -left-[31px] rtl:left-auto rtl:-right-[31px] top-1 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white shadow-sm" />
                  <p className="font-bold text-gray-900">Planning Phase</p>
                  <p className="text-sm text-gray-500 mt-1">Completed</p>
                </div>
                
                <div className="relative">
                  <div className={cn(
                    "absolute -left-[31px] rtl:left-auto rtl:-right-[31px] top-1 w-4 h-4 rounded-full ring-4 ring-white shadow-sm",
                    project.status === 'active' || project.status === 'completed' ? 'bg-primary-500' : 'bg-gray-300'
                  )} />
                  <p className={cn("font-bold", project.status === 'active' || project.status === 'completed' ? 'text-gray-900' : 'text-gray-400')}>Execution Phase</p>
                  <p className="text-sm text-gray-500 mt-1">{project.status === 'active' ? 'In Progress' : ''}</p>
                </div>
                
                <div className="relative">
                  <div className={cn(
                    "absolute -left-[31px] rtl:left-auto rtl:-right-[31px] top-1 w-4 h-4 rounded-full ring-4 ring-white shadow-sm",
                    project.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                  )} />
                  <p className={cn("font-bold", project.status === 'completed' ? 'text-gray-900' : 'text-gray-400')}>Completion</p>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
