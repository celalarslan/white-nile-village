'use client';

import DataTable from '@/components/ui/DataTable';
import { trainings } from '@/lib/data/mockData';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function TrainingsPage() {
  const columns = [
    { key: 'title', label: 'Title (EN)' },
    { 
      key: 'date', 
      label: 'Date',
      render: (val: string) => formatDate(val, 'en')
    },
    { key: 'participantCount', label: 'Participants' },
    { 
      key: 'status', 
      label: 'Status',
      render: (val: string) => {
        const colors = {
          planned: 'bg-blue-100 text-blue-800',
          ongoing: 'bg-amber-100 text-amber-800',
          completed: 'bg-green-100 text-green-800',
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${colors[val as keyof typeof colors] || 'bg-gray-100'}`}>
            {val.toUpperCase()}
          </span>
        );
      }
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: any) => (
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-500 hover:text-primary-600 transition-colors" title="View">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-amber-600 transition-colors" title="Edit">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-red-600 transition-colors" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Training Programs</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
          Add New Training
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <DataTable 
          columns={columns} 
          data={trainings} 
          searchable={true} 
          searchPlaceholder="Search trainings..."
        />
      </div>
    </div>
  );
}
