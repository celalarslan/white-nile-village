import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: number | string;
  target?: number;
  icon?: React.ReactNode;
  color?: string; // We map green to primary-800, navy to navy-900 (slate)
}

export default function StatCard({ label, value, target, icon, color = 'green' }: StatCardProps) {
  const isGreen = color === 'green';
  const progress = target && typeof value === 'number' ? Math.min((value / target) * 100, 100) : null;

  return (
    <div className="bg-transparent py-4 border-b border-gray-100">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Subtle icon */}
          {icon && (
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center border",
              isGreen ? "bg-primary-50 text-primary-800 border-primary-100/30" : "bg-navy-50 text-navy-600 border-navy-100/30"
            )}>
              {icon}
            </div>
          )}
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
        </div>
        
        {/* Large Clean Number */}
        <div className={cn(
          "text-xl font-extrabold tracking-tight",
          isGreen ? "text-primary-800" : "text-gray-900"
        )}>
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
      </div>

      {/* Progress Bar - extremely thin & elegant */}
      {progress !== null && target && (
        <div className="mt-3.5 space-y-1.5">
          <div className="h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-700',
                isGreen ? 'bg-primary-800' : 'bg-navy-600'
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase tracking-wider">
            <span>{dictLabel(value, localeState(label))}</span>
            <span>Target: {target.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Helpers to output fallback values if needed
function dictLabel(val: number | string, isArabic: boolean): string {
  const num = typeof val === 'number' ? val.toLocaleString() : val;
  return isArabic ? `الحالي: ${num}` : `Current: ${num}`;
}

function localeState(label: string): boolean {
  // Simple check to detect if text is Arabic
  return /[\u0600-\u06FF]/.test(label);
}
