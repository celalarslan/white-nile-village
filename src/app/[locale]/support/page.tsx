'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import arDict from '@/dictionaries/ar.json';
import enDict from '@/dictionaries/en.json';
import { CheckCircle, GlobeHemisphereEast as Globe, Envelope as Mail, Phone, Bank as Landmark, ChatCircle as MessageSquare, PaperPlaneRight as Send } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export default function SupportPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] || 'ar') as Locale;
  const dict = locale === 'ar' ? arDict : enDict;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleSupportType = (id: string) => {
    setSelectedTypes((prev) => 
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const supportTypes = [
    { id: 'training', label: dict.support.trainingSupport },
    { id: 'seedling', label: dict.support.seedlingSupport },
    { id: 'agriculture', label: dict.support.agricultureSupport },
    { id: 'livestock', label: dict.support.livestockSupport },
    { id: 'womenYouth', label: dict.support.womenYouthSupport },
    { id: 'technical', label: dict.support.technicalSupport },
    { id: 'grant', label: dict.support.grantDiscussion },
    { id: 'other', label: dict.support.other },
  ];

  const inputClasses = cn(
    "w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all shadow-sm text-gray-800",
    "focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:shadow-md"
  );

  const labelClasses = "block text-sm font-bold text-gray-700 mb-2";

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-950 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-96 h-96 rounded-full bg-earth-300 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            {dict.support.title}
          </h1>
          <div className="h-1 w-20 bg-earth-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-green-100 max-w-xl mx-auto font-medium">
            {dict.support.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Welcome Message Card */}
        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8 text-center mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-earth-500" />
          <p className="text-lg text-gray-700 leading-relaxed font-semibold max-w-2xl mx-auto">
            {dict.support.welcomeMessage}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <CheckCircle className="w-12 h-12 text-green-600 animate-bounce" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{dict.support.successTitle}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">{dict.support.successMessage}</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                {dict.common.back}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Grid 1: Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>
                    <span className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-gray-400" />
                      {dict.support.orgName} *
                    </span>
                  </label>
                  <input type="text" required className={inputClasses} placeholder="Your organization name" />
                </div>
                <div>
                  <label className={labelClasses}>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {dict.support.contactPerson} *
                    </span>
                  </label>
                  <input type="text" required className={inputClasses} placeholder="Contact person name" />
                </div>
                <div>
                  <label className={labelClasses}>{dict.support.email} *</label>
                  <input type="email" required className={inputClasses} placeholder="example@org.com" />
                </div>
                <div>
                  <label className={labelClasses}>{dict.support.phone} *</label>
                  <input type="tel" required className={inputClasses} placeholder="+..." dir="ltr" />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    {dict.support.country} *
                  </span>
                </label>
                <input type="text" required className={inputClasses} placeholder="Country of operations" />
              </div>

              {/* Support Type Grid */}
              <div className="border-t border-gray-100 pt-6">
                <label className="block text-sm font-bold text-gray-700 mb-4">{dict.support.supportType}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {supportTypes.map((type) => {
                    const isSelected = selectedTypes.includes(type.id);
                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => toggleSupportType(type.id)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all text-start cursor-pointer shadow-sm",
                          isSelected 
                            ? "bg-primary-50/50 border-primary-500 text-primary-900 font-bold" 
                            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          readOnly
                          className="w-4.5 h-4.5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 pointer-events-none" 
                        />
                        <span className="text-sm">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="border-t border-gray-100 pt-6">
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    {dict.support.message} *
                  </span>
                </label>
                <textarea required rows={5} className={cn(inputClasses, "resize-none")} placeholder="Describe the potential partnership or scope of support..."></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
                >
                  {isSubmitting ? dict.common.loading : (
                    <>
                      {dict.support.submit}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
