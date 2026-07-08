'use client';

import { mockHouseholds } from '@/lib/data/mockData';
import DataTable from '@/components/ui/DataTable';
import { Eye, Check, X } from 'lucide-react';

export default function RegistrationsPage() {
  const columns = [
    { key: 'applicationNumber', label: 'App. Number' },
    { key: 'headOfFamily', label: 'Head of Family' },
    { key: 'village', label: 'Village' },
    { key: 'phone', label: 'Phone' },
    { 
      key: 'status', 
      label: 'Status',
      render: (val: string) => {
        const colors = {
          pending: 'bg-amber-100 text-amber-800',
          approved: 'bg-green-100 text-green-800',
          rejected: 'bg-red-100 text-red-800',
          incomplete: 'bg-gray-100 text-gray-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${colors[val as keyof typeof colors] || colors.incomplete}`}>
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
          <button className="p-1 text-gray-500 hover:text-primary-600 transition-colors" title="View Details">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-green-600 transition-colors" title="Approve">
            <Check className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-red-600 transition-colors" title="Reject">
            <X className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Registrations</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <DataTable 
          columns={columns} 
          data={mockHouseholds} 
          searchable={true} 
          searchPlaceholder="Search by name, village, or application number..."
        />
      </div>
    </div>
  );
}
