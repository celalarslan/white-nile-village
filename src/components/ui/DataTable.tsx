'use client';

import { useState, useMemo } from 'react';
import { MagnifyingGlass as Search, CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: TableColumn[];
  data: any[];
  searchable?: boolean;
  searchPlaceholder?: string;
}

const PAGE_SIZE = 10;

export default function DataTable({
  columns,
  data,
  searchable = false,
  searchPlaceholder = 'Search...',
}: DataTableProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // Filter data by search query
  const filtered = useMemo(() => {
    if (!search.trim()) return data;

    const query = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const val = row[col.key];
        if (typeof val === 'string') return val.toLowerCase().includes(query);
        if (typeof val === 'number') return String(val).includes(query);
        return false;
      })
    );
  }, [data, search, columns]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(page, totalPages);
  const start = (safeCurrentPage - 1) * PAGE_SIZE;
  const pageData = filtered.slice(start, start + PAGE_SIZE);

  // Reset page when search changes
  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Search Bar */}
      {searchable && (
        <div className="border-b border-gray-100 px-4 py-3">
          <div className="relative max-w-sm">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className={cn(
                'w-full rounded-lg border border-gray-200 py-2 text-sm',
                'ps-9 pe-3',
                'placeholder:text-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-100'
              )}
            />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/80">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-start text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-12 text-center text-sm text-gray-400"
                >
                  No results found.
                </td>
              </tr>
            ) : (
              pageData.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={cn(
                    'border-b border-gray-50 transition-colors hover:bg-green-50/30',
                    rowIdx % 2 === 1 && 'bg-gray-50/40'
                  )}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-gray-700">
                      {col.render ? col.render(row[col.key], row) : row[col.key] ?? '—'}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
          <span className="text-xs text-gray-500">
            {start + 1}–{Math.min(start + PAGE_SIZE, filtered.length)} of{' '}
            {filtered.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage <= 1}
              className={cn(
                'rounded-md p-1.5 text-gray-500 transition-colors',
                safeCurrentPage <= 1
                  ? 'cursor-not-allowed opacity-30'
                  : 'hover:bg-gray-100'
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (p) =>
                  p === 1 ||
                  p === totalPages ||
                  Math.abs(p - safeCurrentPage) <= 1
              )
              .reduce<(number | 'ellipsis')[]>((acc, p, i, arr) => {
                if (i > 0 && p - (arr[i - 1] as number) > 1) {
                  acc.push('ellipsis');
                }
                acc.push(p);
                return acc;
              }, [])
              .map((item, idx) =>
                item === 'ellipsis' ? (
                  <span key={`ellipsis-${idx}`} className="px-1 text-xs text-gray-400">
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => setPage(item)}
                    className={cn(
                      'min-w-[28px] rounded-md px-2 py-1 text-xs font-medium transition-colors',
                      item === safeCurrentPage
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                  >
                    {item}
                  </button>
                )
              )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage >= totalPages}
              className={cn(
                'rounded-md p-1.5 text-gray-500 transition-colors',
                safeCurrentPage >= totalPages
                  ? 'cursor-not-allowed opacity-30'
                  : 'hover:bg-gray-100'
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
