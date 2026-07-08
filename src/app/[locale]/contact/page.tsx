'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import arDict from '@/dictionaries/ar.json';
import enDict from '@/dictionaries/en.json';
import { MapPin, Phone, Envelope as Mail, Buildings as Building } from '@phosphor-icons/react';

export default function ContactPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] || 'ar') as Locale;
  const dict = locale === 'ar' ? arDict : enDict;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{dict.contact.title}</h1>
          <p className="text-xl text-gray-600">{dict.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{dict.contact.orgName}</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 me-4 shrink-0 text-primary-300" />
                  <span>{dict.contact.location}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 me-4 shrink-0 text-primary-300" />
                  <span dir="ltr">+249 12 345 6789</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-6 h-6 me-4 shrink-0 text-primary-300" />
                  <span>info@whiteniledev.org</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-6 h-6 me-4 shrink-0 text-primary-300" />
                  <span>HAC Reg: Pending</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center border border-gray-300">
              <div className="text-center text-gray-500">
                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p>{dict.contact.mapPlaceholder}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{dict.contact.formTitle}</h2>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{dict.contact.successMessage}</h3>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-primary-600 font-medium hover:text-primary-800"
                >
                  {dict.common.back}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.name}</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.emailField}</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.formType}</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white">
                      <option value="">-- {dict.contact.formType} --</option>
                      <option value="registration">{dict.contact.registrationSupport}</option>
                      <option value="partnership">{dict.contact.partnership}</option>
                      <option value="grant">{dict.contact.grantDonation}</option>
                      <option value="media">{dict.contact.media}</option>
                      <option value="volunteer">{dict.contact.volunteering}</option>
                      <option value="other">{dict.contact.otherInquiry}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.subject}</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.messageField}</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? dict.common.loading : dict.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
