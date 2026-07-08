import { FileText, DownloadSimple as Download } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

interface ReportCardProps {
  title: string;
  type: string;
  date: string;
  downloadUrl?: string;
}

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  activity: { bg: 'bg-green-100', text: 'text-green-800' },
  training: { bg: 'bg-sky-100', text: 'text-sky-800' },
  financial: { bg: 'bg-amber-100', text: 'text-amber-800' },
  impact: { bg: 'bg-purple-100', text: 'text-purple-800' },
  field: { bg: 'bg-emerald-100', text: 'text-emerald-800' },
};

export default function ReportCard({ title, type, date, downloadUrl }: ReportCardProps) {
  const typeStyle = TYPE_COLORS[type] ?? { bg: 'bg-gray-100', text: 'text-gray-700' };

  return (
    <div
      className={cn(
        'flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4',
        'shadow-sm transition-all hover:shadow-md hover:border-gray-200'
      )}
    >
      {/* File Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
        <FileText className="h-5 w-5" />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-gray-900">{title}</h4>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium',
              typeStyle.bg,
              typeStyle.text
            )}
          >
            {type}
          </span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
      </div>

      {/* Download Button */}
      {downloadUrl ? (
        <a
          href={downloadUrl}
          download
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
            'text-green-600 transition-colors hover:bg-green-50'
          )}
          aria-label={`Download ${title}`}
        >
          <Download className="h-4 w-4" />
        </a>
      ) : (
        <div
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
            'text-gray-300 cursor-not-allowed'
          )}
        >
          <Download className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
