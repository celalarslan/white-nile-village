'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import { certificates } from '@/lib/data/mockData';
import { formatDate, getLocalizedField } from '@/lib/utils';
import arDict from '@/dictionaries/ar.json';
import enDict from '@/dictionaries/en.json';
import { MagnifyingGlass as Search, CheckCircle, XCircle } from '@phosphor-icons/react';

export default function VerifyCertificatePage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] || 'ar') as Locale;
  const dict = locale === 'ar' ? arDict : enDict;

  const [certNumber, setCertNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<typeof certificates[0] | null | 'not_found'>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certNumber.trim()) return;

    setIsVerifying(true);
    setResult(null);

    // Simulate API lookup
    setTimeout(() => {
      const found = certificates.find(
        (c) => c.certificateNumber.toLowerCase() === certNumber.trim().toLowerCase()
      );
      setResult(found || 'not_found');
      setIsVerifying(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{dict.certificate.title}</h1>
          <p className="text-xl text-gray-600">{dict.certificate.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
          <form onSubmit={handleVerify} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={certNumber}
                  onChange={(e) => setCertNumber(e.target.value)}
                  placeholder={dict.certificate.enterNumber}
                  className="w-full px-4 py-4 md:text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-gray-50 text-center uppercase tracking-wider"
                  dir="ltr"
                />
              </div>
              <button
                type="submit"
                disabled={isVerifying || !certNumber.trim()}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isVerifying ? (
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                ) : (
                  <Search className="w-5 h-5 me-2" />
                )}
                {dict.certificate.verify}
              </button>
            </div>
          </form>

          {result === 'not_found' && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6 text-center animate-fade-in">
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="text-lg font-medium">{dict.certificate.notFound}</p>
            </div>
          )}

          {result && result !== 'not_found' && (
            <div className="border-2 border-primary-100 rounded-2xl overflow-hidden animate-fade-in">
              <div className="bg-primary-50 px-6 py-4 border-b border-primary-100 flex items-center justify-between">
                <h3 className="font-bold text-primary-900 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 me-2" />
                  {dict.certificate.statusLabel}: {dict.certificate.valid}
                </h3>
                <span className="text-sm font-mono text-gray-500">{result.certificateNumber}</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{dict.certificate.name}</p>
                  <p className="text-xl font-bold text-gray-900">{result.participantName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{dict.certificate.trainingName}</p>
                  <p className="text-lg text-gray-800">
                    {getLocalizedField(result, 'trainingTitle', locale as Locale)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{dict.certificate.date}</p>
                  <p className="text-gray-800">{formatDate(result.issueDate, locale as Locale)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>{dict.footer.privacyNote}</p>
        </div>
      </div>
    </div>
  );
}
