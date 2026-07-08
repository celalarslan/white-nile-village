'use client';

import DataTable from '@/components/ui/DataTable';
import { Eye, Mail, Check, X } from 'lucide-react';

export default function PartnersPage() {
  // Mock partner data for MVP
  const partnerApplications = [
    {
      id: '1',
      orgName: 'Global Green Fund',
      contactPerson: 'Jane Smith',
      email: 'jane@greenfund.org',
      country: 'UK',
      type: 'Grant',
      status: 'new'
    },
    {
      id: '2',
      orgName: 'AgriTech Solutions',
      contactPerson: 'Ahmed Hassan',
      email: 'ahmed@agritech.com',
      country: 'UAE',
      type: 'Technical Support',
      status: 'contacted'
    }
  ];

  const columns = [
    { key: 'orgName', label: 'Organization' },
    { key: 'contactPerson', label: 'Contact Person' },
    { key: 'type', label: 'Support Type' },
    { key: 'country', label: 'Country' },
    { 
      key: 'status', 
      label: 'Status',
      render: (val: string) => {
        const colors = {
          new: 'bg-blue-100 text-blue-800',
          contacted: 'bg-amber-100 text-amber-800',
          reviewed: 'bg-purple-100 text-purple-800',
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
          <button className="p-1 text-gray-500 hover:text-primary-600 transition-colors" title="View Application">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-amber-600 transition-colors" title="Send Email">
            <Mail className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-green-600 transition-colors" title="Accept">
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
        <h1 className="text-2xl font-bold text-gray-900">Partner Applications</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <DataTable 
          columns={columns} 
          data={partnerApplications} 
          searchable={true} 
          searchPlaceholder="Search organizations or contacts..."
        />
      </div>
    </div>
  );
}
