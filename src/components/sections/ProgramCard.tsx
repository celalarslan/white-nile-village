import { BookOpen, Drop as Droplets, Heart, Leaf, Plant as Sprout, Target, TreeEvergreen as TreePine, UsersThree as Users, Farm as Wheat, Wrench, GraduationCap, HandHeart, Buildings as Building, GlobeHemisphereEast as Globe, Lightbulb, ShieldCheck as Shield } from '@phosphor-icons/react/dist/ssr';
import type { Icon, IconProps } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/types';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  expectedImpact: string;
  icon: string;
  image?: string;
  locale: Locale;
  dict: any;
}

/** Map icon name strings to lucide-react components */
const ICON_MAP: Record<string, Icon> = {
  'book-open': BookOpen,
  bookopen: BookOpen,
  droplets: Droplets,
  heart: Heart,
  leaf: Leaf,
  sprout: Sprout,
  target: Target,
  'tree-pine': TreePine,
  treepine: TreePine,
  users: Users,
  wheat: Wheat,
  wrench: Wrench,
  'graduation-cap': GraduationCap,
  graduationcap: GraduationCap,
  handheart: HandHeart,
  building: Building,
  globe: Globe,
  lightbulb: Lightbulb,
  shield: Shield,
};

function getIcon(name: string): Icon {
  const key = name.toLowerCase().replace(/\s+/g, '');
  return ICON_MAP[key] ?? Leaf;
}

export default function ProgramCard({
  id,
  title,
  description,
  targetAudience,
  expectedImpact,
  icon,
  image,
  locale,
  dict,
}: ProgramCardProps) {
  const rtl = isRTL(locale);
  const IconComponent = getIcon(icon);

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
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 z-10 relative bg-white">
        {/* Floating Icon */}
        <div className={cn(
          "absolute -top-12 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg",
          rtl ? "right-6" : "left-6"
        )}>
          <IconComponent className="h-7 w-7" />
        </div>

        {/* Title */}
        <h3 className={cn("text-xl font-bold text-gray-900", image ? "mt-4 mb-3" : "mb-3")}>{title}</h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">{description}</p>

        {/* Target & Impact grid */}
        <div className="grid grid-cols-1 gap-4 mb-6 pt-4 border-t border-gray-50">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600">
              {dict?.programs?.targetAudience ?? 'Target Audience'}
            </span>
            <p className="mt-1 text-sm text-gray-700 font-medium line-clamp-1">{targetAudience}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-earth-600">
              {dict?.programs?.expectedImpact ?? 'Expected Impact'}
            </span>
            <p className="mt-1 text-sm text-gray-700 font-medium line-clamp-1">{expectedImpact}</p>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/${locale}/programs/${id}`}
          className={cn(
            'mt-auto w-full rounded-xl bg-gray-50 py-3 text-center block',
            'text-sm font-bold text-primary-700 transition-colors',
            'hover:bg-primary-50 group-hover:bg-primary-600 group-hover:text-white'
          )}
        >
          {dict?.programs?.viewDetails ?? 'View Details'}
        </Link>
      </div>
    </div>
  );
}
