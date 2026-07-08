import { cn } from '@/lib/utils';

interface AdminDashboardCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color?: string;
  change?: string;
}

const COLOR_MAP: Record<string, { border: string; iconBg: string; iconText: string }> = {
  green: {
    border: 'border-t-green-500',
    iconBg: 'bg-green-50',
    iconText: 'text-green-600',
  },
  blue: {
    border: 'border-t-sky-500',
    iconBg: 'bg-sky-50',
    iconText: 'text-sky-600',
  },
  amber: {
    border: 'border-t-amber-500',
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
  },
  navy: {
    border: 'border-t-sky-900',
    iconBg: 'bg-sky-50',
    iconText: 'text-sky-900',
  },
  red: {
    border: 'border-t-red-500',
    iconBg: 'bg-red-50',
    iconText: 'text-red-600',
  },
  purple: {
    border: 'border-t-purple-500',
    iconBg: 'bg-purple-50',
    iconText: 'text-purple-600',
  },
};

export default function AdminDashboardCard({
  title,
  value,
  icon,
  color = 'green',
  change,
}: AdminDashboardCardProps) {
  const colorStyle = COLOR_MAP[color] ?? COLOR_MAP.green;

  const isPositive = change?.startsWith('+');
  const isNegative = change?.startsWith('-');

  return (
    <div
      className={cn(
        'rounded-xl border border-gray-100 border-t-4 bg-white p-5 shadow-sm',
        'transition-shadow hover:shadow-md',
        colorStyle.border
      )}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg',
            colorStyle.iconBg,
            colorStyle.iconText
          )}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-gray-900">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
            {change && (
              <span
                className={cn(
                  'text-xs font-semibold',
                  isPositive && 'text-green-600',
                  isNegative && 'text-red-500',
                  !isPositive && !isNegative && 'text-gray-500'
                )}
              >
                {change}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
