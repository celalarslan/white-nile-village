import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/types';
import { isRTL } from '@/lib/i18n/config';
import { Target, Pulse as Activity, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  targetAudience: string;
  impactIndicators: string[];
  image?: string;
  locale: Locale;
  dict: any;
}

export default function ProjectCard({
  id,
  title,
  description,
  status,
  targetAudience,
  impactIndicators,
  image,
  locale,
  dict,
}: ProjectCardProps) {
  const rtl = isRTL(locale);
  const statusText = dict?.projects?.status?.[status] ?? status;

  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl bg-white',
        'border border-gray-100 shadow-soft shadow-hover relative'
      )}
    >
      {/* Image Banner */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Status Badge Over Image */}
          <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto">
            <span
              className={cn(
                'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md',
                status === 'planning' ? 'bg-amber-500/80 text-white' : 
                status === 'active' ? 'bg-green-500/80 text-white' : 
                'bg-blue-500/80 text-white'
              )}
            >
              {statusText}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 z-10 relative bg-white">
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">{title}</h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">{description}</p>

        {/* Info Grid */}
        <div className="grid gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Target className="h-4 w-4 text-primary-500 flex-shrink-0" />
            <span className="font-medium line-clamp-1">{targetAudience}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <Activity className="h-4 w-4 text-earth-500 mt-0.5 flex-shrink-0" />
            <ul className="flex flex-wrap gap-1">
              {impactIndicators?.slice(0, 2).map((indicator, idx) => (
                <li key={idx} className="bg-gray-50 px-2 py-0.5 rounded text-xs border border-gray-100">
                  {indicator}
                </li>
              ))}
              {impactIndicators && impactIndicators.length > 2 && (
                <li className="bg-gray-50 px-2 py-0.5 rounded text-xs border border-gray-100">
                  +{impactIndicators.length - 2}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/${locale}/projects/${id}`}
          className={cn(
            'mt-auto flex items-center justify-center gap-2 rounded-xl bg-gray-50 py-3',
            'text-sm font-bold text-primary-700 transition-colors',
            'hover:bg-primary-50 group-hover:bg-primary-600 group-hover:text-white'
          )}
        >
          {dict?.projects?.viewDetails ?? 'View Details'}
          <ArrowRight className={cn("w-4 h-4 transition-transform", rtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
        </Link>
      </div>
    </div>
  );
}
