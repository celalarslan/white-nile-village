import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/lib/data/mockData';
import { getLocalizedField } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.projects?.title as string} | ${dict.site?.name as string}`,
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{dict.projects?.title as string}</h1>
          <p className="text-xl text-gray-600">{dict.projects?.subtitle as string}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={getLocalizedField(project, 'title', locale as Locale)}
                description={getLocalizedField(project, 'description', locale as Locale)}
                status={project.status}
                targetAudience={project.targetAudience}
                impactIndicators={project.impactIndicators}
                image={project.image}
                locale={locale as Locale}
                dict={dict}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
