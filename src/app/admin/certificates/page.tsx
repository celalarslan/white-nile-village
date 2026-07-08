'use client';

import DataTable from '@/components/ui/DataTable';
import { certificates } from '@/lib/data/mockData';
import { Download, Ban } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function CertificatesPage() {
  const columns = [
    { key: 'certificateNumber', label: 'Certificate No.' },
    { key: 'participantName', label: 'Participant' },
    { key: 'trainingTitle', label: 'Training' },
    { 
      key: 'issueDate', 
      label: 'Issue Date',
      render: (val: string) => formatDate(val, 'en')
    },
    { 
      key: 'isValid', 
      label: 'Status',
      render: (val: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${val ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {val ? 'VALID' : 'REVOKED'}
        </span>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: any) => (
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-500 hover:text-primary-600 transition-colors" title="Download PDF">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-red-600 transition-colors" title="Revoke">
            <Ban className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Certificates</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
          Generate Certificate
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <DataTable 
          columns={columns} 
          data={certificates} 
          searchable={true} 
          searchPlaceholder="Search by number or name..."
        />
      </div>
    </div>
  );
}
