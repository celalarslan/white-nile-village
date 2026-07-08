'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import arDict from '@/dictionaries/ar.json';
import enDict from '@/dictionaries/en.json';
import { generateApplicationNumber, cn } from '@/lib/utils';
import { CheckCircle as CheckCircle2, CaretRight as ChevronRight, CaretLeft as ChevronLeft, PaperPlaneRight as Send, ShieldWarning as ShieldAlert, Clock, ShieldCheck, Database, UploadSimple as Upload, FileText, Check, LockKey as Lock } from '@phosphor-icons/react';
import { isRTL } from '@/lib/i18n/config';

const getNavHref = (locale: string, path: string = "") => {
  const cleanPath = path.replace(/^\/+/, "");
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
};

export default function RegistrationPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] || 'ar') as Locale;
  const dict = locale === 'ar' ? arDict : enDict;
  const rtl = isRTL(locale);

  const [step, setStep] = useState(1);
  const [appNumber, setAppNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDraftToast, setShowDraftToast] = useState(false);
  

  // Validation errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form State
  const [formData, setFormData] = useState({
    headOfFamily: '',
    phone: '',
    village: '',
    idNumber: '',
    idDocType: 'national_id',
    householdSize: '',
    childrenCount: '',
    womenCount: '',
    youthCount: '',
    schoolChildren: '',
    hasDisabled: 'no',
    mainIncome: '',
    monthlyIncome: '',
    treeCount: '',
    annualProduction: '',
    hasLand: '',
    landSize: '',
    waterSource: '',
    crops: '',
    suitableForTomato: '',
    cattleCount: '',
    sheepGoatCount: '',
    hasMilkProduction: '',
    hasVetSupport: '',
    mostUrgentNeed: '',
    trainingNeed: '',
    notes: '',
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
  });

  useEffect(() => {
    setAppNumber(generateApplicationNumber());
  }, []);

  const totalSteps = 7;

  const steps = [
    dict.registration.step1,
    dict.registration.step2,
    dict.registration.step3,
    dict.registration.step4,
    dict.registration.step5,
    dict.registration.step6,
    dict.registration.step7,
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear validation error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.headOfFamily.trim()) stepErrors.headOfFamily = locale === 'ar' ? 'الاسم مطلوب' : 'Name is required';
      if (!formData.phone.trim()) stepErrors.phone = locale === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone is required';
      if (!formData.village.trim()) stepErrors.village = locale === 'ar' ? 'اسم القرية مطلوب' : 'Village is required';
      if (!formData.idNumber.trim()) stepErrors.idNumber = locale === 'ar' ? 'رقم الهوية مطلوب' : 'ID Number is required';
    }

    if (currentStep === 2) {
      if (!formData.mainIncome.trim()) stepErrors.mainIncome = locale === 'ar' ? 'مصدر الدخل مطلوب' : 'Income source is required';
    }

    if (currentStep === 7) {
      if (!formData.consent1) stepErrors.consent1 = locale === 'ar' ? 'يجب تأكيد دقة البيانات' : 'Confirmation is required';
      if (!formData.consent2) stepErrors.consent2 = locale === 'ar' ? 'مطلوب الموافقة على معالجة البيانات' : 'Consent is required';
      if (!formData.consent3) stepErrors.consent3 = locale === 'ar' ? 'مطلوب تأكيد سرية البيانات الشخصية' : 'Consent to data privacy is required';
      if (!formData.consent4) stepErrors.consent4 = locale === 'ar' ? 'مطلوب تأكيد فهم طبيعة البرنامج التنموية' : 'Consent is required';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveDraft = () => {
    setShowDraftToast(true);
    setTimeout(() => setShowDraftToast(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(7)) {
      setIsSuccess(true);
    }
  };


  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF7EF] py-24 px-4 flex items-center justify-center" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="max-w-xl w-full text-center bg-white rounded-[2rem] border border-[#E7E0D2] shadow-soft p-8 md:p-12 relative">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-7 h-7 text-emerald-800" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary-900 mb-3">{dict.registration.successTitle}</h1>
          <p className="text-xs text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">{dict.registration.successMessage}</p>
          
          <div className="inline-block bg-[#FAF7EF] border border-[#E7E0D2]/50 px-6 py-4 rounded-xl mb-8">
            <span className="block text-[8px] font-extrabold uppercase tracking-widest text-[#9A6B3F] mb-1.5">{dict.registration.applicationNumber}</span>
            <span className="text-lg font-mono font-extrabold text-primary-900">{appNumber}</span>
          </div>
          
          <div className="pt-2">
            <button 
              onClick={() => window.location.href = `/${locale}`} 
              className="btn-primary px-8 py-3 shadow-soft cursor-pointer text-xs"
            >
              {dict.nav.home}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF]" dir={rtl ? 'rtl' : 'ltr'}>
      
      {/* Draft Save Toast notification */}
      {showDraftToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#123524] text-white px-5 py-3 rounded-xl shadow-lg border border-[#1F4D36] flex items-center gap-2.5 transition-all animate-fade-in">
          <Check className="w-4 h-4 text-[#F4E8D0]" />
          <span className="text-xs font-bold">{dict.registration.draftSaved}</span>
        </div>
      )}

      <div className="ngo-container max-w-6xl">
        
        {/* 1. Page Intro / Hero */}
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4E8D0]/50 border border-[#E7E0D2] text-[9px] font-extrabold text-earth-700 uppercase tracking-widest">
            {dict.registration.badge}
          </span>
          <h1 className="text-2xl md:text-3.5xl font-extrabold text-primary-900 tracking-tight">{dict.registration.title}</h1>
          <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed font-semibold">{dict.registration.subtitle}</p>
          <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">{dict.registration.trustLine}</span>
        </div>

        {/* Desktop grid layout: left forms + right side details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Block (Form and Stepper) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 2. Trust and Privacy Notice */}
            <div className="bg-[#FAF7EF]/90 rounded-xl p-4 border border-[#E7E0D2] shadow-soft flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#9A6B3F] shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-primary-900 uppercase tracking-wider">{dict.registration.privacyTitle}</h4>
                <ul className="text-[11px] text-gray-655 leading-loose font-medium space-y-1 list-disc list-inside">
                  <li>{dict.registration.privacyDesc1}</li>
                  <li>{dict.registration.privacyDesc2}</li>
                  <li>{dict.registration.privacyDesc3}</li>
                  <li>{dict.registration.privacyDesc4}</li>
                  <li>{dict.registration.privacyDesc5}</li>
                </ul>
              </div>
            </div>

            {/* 3. Application Summary Panel (Mobile) */}
            <div className="lg:hidden block">
  
            <div className="bg-white rounded-[1.5rem] border border-[#E7E0D2]/60 p-6 shadow-sm space-y-5 bg-gradient-to-b from-white to-gray-50/30">
              <h3 className="text-xs font-extrabold text-[#9A6B3F] uppercase tracking-widest border-b border-[#E7E0D2]/50 pb-2">
                {dict.registration.summaryTitle}
              </h3>
              
              <div className="space-y-4 text-xs font-semibold text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.applicationNumber}</span>
                  <span className="font-mono text-[11px] font-medium text-primary-800 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{appNumber}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{locale === 'ar' ? 'القسم الحالي' : 'Current Step'}</span>
                  <span className="text-primary-900 font-semibold">Section {step} of {totalSteps}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.statusLabel}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {dict.registration.statusValue}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.estTimeLabel}</span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-3.5 h-3.5" />
                    {dict.registration.estTimeValue}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.protectionLabel}</span>
                  <span className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold text-[10px] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {dict.registration.protectionValue}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.langLabel}</span>
                  <span className="uppercase text-[10px] font-bold text-primary-900 bg-gray-50 px-2.5 py-1 rounded border border-gray-150/40">
                    {locale}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E7E0D2]/50 text-center">
                <p className="text-[10px] text-gray-400 leading-relaxed font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  RESTRICTED ACCESS DATABASE
                </p>
              </div>
            </div>
                      </div>

            {/* 4. Multi-step progress indicator */}
            <div className="hidden md:block bg-white rounded-2xl border border-[#E7E0D2]/40 p-5 shadow-soft overflow-x-auto scrollbar-none">
              <div className="flex justify-between items-center min-w-[650px] relative px-4">
                {steps.map((label, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 relative z-10">
                    <button
                      type="button"
                      onClick={() => {
                        // Allow skipping only to completed steps
                        if (idx + 1 < step) {
                          setStep(idx + 1);
                        } else if (idx + 1 > step && validateStep(step)) {
                          setStep(idx + 1);
                        }
                      }}
                      className={cn(
                        "w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all duration-300 cursor-pointer border",
                        step > idx + 1 
                          ? 'bg-[#3F7D4A] border-[#3F7D4A] text-white shadow-soft' 
                          : step === idx + 1 
                            ? 'bg-[#1F4D36] border-[#1F4D36] text-white ring-8 ring-[#1F4D36]/10 scale-105 shadow-md' 
                            : 'bg-gray-50 border-gray-200 text-gray-400'
                      )}
                    >
                      {step > idx + 1 ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </button>
                    <span className={cn(
                      "text-[9px] font-extrabold mt-2.5 text-center max-w-[85px] leading-tight",
                      step === idx + 1 ? 'text-[#1F4D36]' : 'text-gray-400'
                    )}>{label}</span>
                  </div>
                ))}
                {/* Connecting Line */}
                <div className="absolute top-3.5 md:top-4.5 left-12 right-12 h-[1px] bg-gray-150 z-0">
                  <div 
                    className="h-full bg-[#3F7D4A] transition-all duration-500" 
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 5. Current step form card */}
            <div className="bg-white rounded-3xl border border-[#E7E0D2] shadow-sm overflow-hidden">
              
              {/* Stepper Label Panel for Mobile */}
              <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100/70 flex md:hidden justify-between items-center">
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">Section {step} of {totalSteps}</span>
                <span className="text-[10px] font-bold text-primary-900">{steps[step - 1]}</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
                
                {/* Step 1: Family Information */}
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">
                          {dict.registration.headOfFamily} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.headOfFamily}
                          onChange={(e) => handleInputChange('headOfFamily', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400",
                            errors.headOfFamily ? "border-rose-500 focus:border-rose-500" : "border-gray-200"
                          )} 
                          placeholder="e.g. Ali Ahmed" 
                        />
                        {errors.headOfFamily && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.headOfFamily}</span>}
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">
                          {dict.registration.phone} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400",
                            errors.phone ? "border-rose-500 focus:border-rose-500" : "border-gray-200"
                          )} 
                          placeholder="+249..." 
                          dir="ltr"
                        />
                        {errors.phone && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.phone}</span>}
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">
                          {dict.registration.village} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.village}
                          onChange={(e) => handleInputChange('village', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400",
                            errors.village ? "border-rose-500 focus:border-rose-500" : "border-gray-200"
                          )} 
                          placeholder="e.g. Um Rimta" 
                        />
                        {errors.village && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.village}</span>}
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">
                          {dict.registration.idNumber} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.idNumber}
                          onChange={(e) => handleInputChange('idNumber', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400",
                            errors.idNumber ? "border-rose-500 focus:border-rose-500" : "border-gray-200"
                          )} 
                          placeholder="National ID Number" 
                        />
                        {errors.idNumber && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.idNumber}</span>}
                      </div>
                    </div>

                    {/* Grouped section: Members */}
                    <div className="pt-8 mt-2 border-t border-gray-100">
                      <h4 className="text-[10px] font-extrabold text-[#9A6B3F] uppercase tracking-widest pb-1.5 border-b border-gray-100/70 mb-4">Household Composition</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                        <div>
                          <label className="block text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-2 leading-relaxed">{dict.registration.householdSize}</label>
                          <input 
                            type="number" 
                            min="1" 
                            value={formData.householdSize}
                            onChange={(e) => handleInputChange('householdSize', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-2 leading-relaxed">{dict.registration.childrenCount}</label>
                          <input 
                            type="number" 
                            min="0" 
                            value={formData.childrenCount}
                            onChange={(e) => handleInputChange('childrenCount', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-2 leading-relaxed">{dict.registration.womenCount}</label>
                          <input 
                            type="number" 
                            min="0" 
                            value={formData.womenCount}
                            onChange={(e) => handleInputChange('womenCount', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-2 leading-relaxed">{dict.registration.youthCount}</label>
                          <input 
                            type="number" 
                            min="0" 
                            value={formData.youthCount}
                            onChange={(e) => handleInputChange('youthCount', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-2 leading-relaxed">{dict.registration.schoolChildren}</label>
                        <input 
                          type="number" 
                          min="0" 
                          value={formData.schoolChildren}
                          onChange={(e) => handleInputChange('schoolChildren', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.hasDisabled}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasDisabled === 'yes' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-200 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasDisabled" 
                              value="yes" 
                              checked={formData.hasDisabled === 'yes'}
                              onChange={() => handleInputChange('hasDisabled', 'yes')}
                              className="sr-only" 
                            />
                            {dict.registration.yes}
                          </label>
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasDisabled === 'no' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-205 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasDisabled" 
                              value="no" 
                              checked={formData.hasDisabled === 'no'}
                              onChange={() => handleInputChange('hasDisabled', 'no')}
                              className="sr-only" 
                            />
                            {dict.registration.no}
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Document Upload Status Info Box */}
                    <div className="pt-8 mt-2 border-t border-gray-100">
                      <div className="bg-[#fcfaf7] border border-[#f3ead8] rounded-xl p-5 flex items-start gap-4 shadow-sm">
                        <div className="bg-[#f3ead8] p-2.5 rounded-lg text-earth-700 shrink-0">
                          <ShieldAlert className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-sm mb-1">
                            {locale === 'ar' ? 'معالجة البيانات والوثائق' : 'Data & Document Security'}
                          </h5>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {locale === 'ar' 
                              ? 'جمع المستندات غير مفعل في هذه النسخة التجريبية. وإذا كانت هناك حاجة إلى مستندات لاحقاً، فسيتم جمعها فقط عبر الموظفين المخولين وباستخدام تخزين آمن.'
                              : 'Document collection is not active in this staging version. If documents are required later, they will be collected only through authorized staff and secure storage.'
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Step 2: Education & Income */}
                {step === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">
                          {dict.registration.mainIncome} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.mainIncome}
                          onChange={(e) => handleInputChange('mainIncome', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400",
                            errors.mainIncome ? "border-rose-500 focus:border-rose-500" : "border-gray-200"
                          )} 
                          placeholder="e.g. Gum Arabic, Farming" 
                        />
                        {errors.mainIncome && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.mainIncome}</span>}
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.monthlyIncome}</label>
                        <input 
                          type="number" 
                          value={formData.monthlyIncome}
                          onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="Amount in Sudanese Pounds" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Gum Arabic Profile */}
                {step === 3 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.treeCount}</label>
                        <input 
                          type="number" 
                          value={formData.treeCount}
                          onChange={(e) => handleInputChange('treeCount', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.annualProduction}</label>
                        <input 
                          type="text" 
                          value={formData.annualProduction}
                          onChange={(e) => handleInputChange('annualProduction', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="e.g. 150 kg" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Agriculture Profile */}
                {step === 4 && (
                  <div className="space-y-8 animate-fade-in">
                    <h4 className="text-[10px] font-extrabold text-[#9A6B3F] uppercase tracking-widest pb-1.5 border-b border-gray-100/70 mb-4">Land Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-2">
                      
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.hasLand}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasLand === 'yes' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-200 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasLand" 
                              checked={formData.hasLand === 'yes'}
                              onChange={() => handleInputChange('hasLand', 'yes')}
                              className="sr-only" 
                            />
                            {dict.registration.yes}
                          </label>
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasLand === 'no' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-205 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasLand" 
                              checked={formData.hasLand === 'no'}
                              onChange={() => handleInputChange('hasLand', 'no')}
                              className="sr-only" 
                            />
                            {dict.registration.no}
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.landSize}</label>
                        <input 
                          type="text" 
                          value={formData.landSize}
                          onChange={(e) => handleInputChange('landSize', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="e.g. 5 Feddans" 
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.waterSource}</label>
                        <input 
                          type="text" 
                          value={formData.waterSource}
                          onChange={(e) => handleInputChange('waterSource', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="e.g. River, Well" 
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.crops}</label>
                        <input 
                          type="text" 
                          value={formData.crops}
                          onChange={(e) => handleInputChange('crops', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="e.g. Tomato, Sorghum" 
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.suitableForTomato}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.suitableForTomato === 'yes' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-200 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="suitableForTomato" 
                              checked={formData.suitableForTomato === 'yes'}
                              onChange={() => handleInputChange('suitableForTomato', 'yes')}
                              className="sr-only" 
                            />
                            {dict.registration.yes}
                          </label>
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.suitableForTomato === 'no' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-205 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="suitableForTomato" 
                              checked={formData.suitableForTomato === 'no'}
                              onChange={() => handleInputChange('suitableForTomato', 'no')}
                              className="sr-only" 
                            />
                            {dict.registration.no}
                          </label>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* Step 5: Livestock Profile */}
                {step === 5 && (
                  <div className="space-y-8 animate-fade-in">
                    <h4 className="text-[10px] font-extrabold text-[#9A6B3F] uppercase tracking-widest pb-1.5 border-b border-gray-100/70 mb-4">Livestock Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-2">
                      
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.cattleCount}</label>
                        <input 
                          type="number" 
                          value={formData.cattleCount}
                          onChange={(e) => handleInputChange('cattleCount', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.sheepGoatCount}</label>
                        <input 
                          type="number" 
                          value={formData.sheepGoatCount}
                          onChange={(e) => handleInputChange('sheepGoatCount', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.hasMilkProduction}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasMilkProduction === 'yes' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-200 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasMilkProduction" 
                              checked={formData.hasMilkProduction === 'yes'}
                              onChange={() => handleInputChange('hasMilkProduction', 'yes')}
                              className="sr-only" 
                            />
                            {dict.registration.yes}
                          </label>
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasMilkProduction === 'no' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-205 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasMilkProduction" 
                              checked={formData.hasMilkProduction === 'no'}
                              onChange={() => handleInputChange('hasMilkProduction', 'no')}
                              className="sr-only" 
                            />
                            {dict.registration.no}
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.hasVetSupport}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasVetSupport === 'yes' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-200 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasVetSupport" 
                              checked={formData.hasVetSupport === 'yes'}
                              onChange={() => handleInputChange('hasVetSupport', 'yes')}
                              className="sr-only" 
                            />
                            {dict.registration.yes}
                          </label>
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasVetSupport === 'no' ? 'bg-[#1F4D36]/5 border-[#1F4D36] text-[#1F4D36]' : 'border-gray-205 bg-white hover:bg-gray-50'
                          )}>
                            <input 
                              type="radio" 
                              name="hasVetSupport" 
                              checked={formData.hasVetSupport === 'no'}
                              onChange={() => handleInputChange('hasVetSupport', 'no')}
                              className="sr-only" 
                            />
                            {dict.registration.no}
                          </label>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* Step 6: Needs Assessment */}
                {step === 6 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.mostUrgentNeed}</label>
                        <select 
                          value={formData.mostUrgentNeed}
                          onChange={(e) => handleInputChange('mostUrgentNeed', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white cursor-pointer"
                        >
                          <option value="">-- {locale === 'ar' ? 'حدد الاحتياج' : 'Select'} --</option>
                          <option value="water">{dict.registration.waterNeed}</option>
                          <option value="seeds">{dict.registration.agricultureSupport}</option>
                          <option value="training">{dict.registration.trainingNeed}</option>
                          <option value="other">{locale === 'ar' ? 'أخرى' : 'Other'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.trainingNeed}</label>
                        <input 
                          type="text" 
                          value={formData.trainingNeed}
                          onChange={(e) => handleInputChange('trainingNeed', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white placeholder-gray-400" 
                          placeholder="e.g. Tree Pruning, Water Management" 
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed">{dict.registration.notes}</label>
                      <textarea 
                        rows={4} 
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="w-full rounded-lg p-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white resize-none placeholder-gray-400" 
                        placeholder="Additional notes or support comments..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 7: Consent & Submit */}
                {step === 7 && (
                  <div className="space-y-8 animate-fade-in">
                    
                    {/* Consent Checkboxes */}
                    <div className="bg-[#FAF7EF]/90 border border-[#E7E0D2] rounded-2xl p-6 space-y-4">
                      
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={formData.consent1}
                          onChange={(e) => handleInputChange('consent1', e.target.checked)}
                          className="mt-1 w-4.5 h-4.5 text-primary-800 border-gray-300 rounded focus:ring-primary-800 cursor-pointer" 
                        />
                        <span className="text-gray-800 text-xs font-semibold select-none group-hover:text-primary-950 leading-relaxed">
                          {locale === 'ar' 
                            ? 'أؤكد أن جميع المعلومات المقدمة في هذا النموذج دقيقة وصحيحة بحسب علمي.' 
                            : 'I confirm that the information is accurate to the best of my knowledge.'}
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={formData.consent2}
                          onChange={(e) => handleInputChange('consent2', e.target.checked)}
                          className="mt-1 w-4.5 h-4.5 text-primary-800 border-gray-300 rounded focus:ring-primary-800 cursor-pointer" 
                        />
                        <span className="text-gray-800 text-xs font-semibold select-none group-hover:text-primary-950 leading-relaxed">
                          {dict.registration.consent1}
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={formData.consent3}
                          onChange={(e) => handleInputChange('consent3', e.target.checked)}
                          className="mt-1 w-4.5 h-4.5 text-primary-800 border-gray-300 rounded focus:ring-primary-800 cursor-pointer" 
                        />
                        <span className="text-gray-800 text-xs font-semibold select-none group-hover:text-primary-950 leading-relaxed">
                          {dict.registration.consent2}
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={formData.consent4}
                          onChange={(e) => handleInputChange('consent4', e.target.checked)}
                          className="mt-1 w-4.5 h-4.5 text-primary-800 border-gray-300 rounded focus:ring-primary-800 cursor-pointer" 
                        />
                        <span className="text-gray-800 text-xs font-semibold select-none group-hover:text-primary-950 leading-relaxed">
                          {locale === 'ar'
                            ? 'أفهم تماماً أن هذا التسجيل والتقييم يهدف للتخطيط التنموي والتدريب الإرشادي، ولا يمثل وعداً مالياً أو إغاثياً مباشراً.'
                            : 'I understand that registration is for project planning and vocational assessment, and does not guarantee immediate financial support.'}
                        </span>
                      </label>

                    </div>

                    {/* Validation Errors for Consent checkboxes */}
                    {(errors.consent1 || errors.consent2 || errors.consent3 || errors.consent4) && (
                      <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
                        <p className="text-xs text-rose-600 font-bold leading-relaxed">
                          {locale === 'ar' 
                            ? 'يرجى مراجعة وتأكيد جميع بنود الموافقة والإقرار لإكمال عملية التسجيل.' 
                            : 'Please review and confirm all consent and declaration items to submit.'}
                        </p>
                      </div>
                    )}

                    {/* Anonymous Statistics note */}
                    <p className="text-[10px] text-gray-400 leading-relaxed font-bold uppercase tracking-wider text-center">
                      {locale === 'ar'
                        ? 'ملاحظة: قد يتم استخدام الإحصاءات العامة مجهولة الهوية في تقارير المانحين والتخطيط التنموي.'
                        : 'Note: Anonymous statistics may be used in donor and development reports.'}
                    </p>

                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-10 pt-6 border-t border-gray-100/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={cn(
                      "px-5 py-3 border border-gray-255 rounded-xl text-gray-700 text-xs font-extrabold hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer inline-flex items-center gap-1.5 w-full sm:w-auto justify-center",
                      step === 1 ? 'invisible sm:hidden' : ''
                    )}
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                    {dict.registration.previous}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto sm:ms-auto">
                    
                    {/* Save progress Draft Button */}
                    <button
                      type="button"
                      onClick={handleSaveDraft}
                      className="px-5 py-3 text-xs font-extrabold text-gray-450 hover:text-gray-700 hover:bg-gray-50/50 rounded-xl transition-all w-full sm:w-auto justify-center inline-flex items-center cursor-pointer border border-transparent hover:border-gray-200"
                    >
                      {dict.registration.saveDraft}
                    </button>

                    {/* Next / Submit Button */}
                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary px-6 py-3 text-xs font-bold transition-all shadow-soft cursor-pointer inline-flex items-center gap-1.5 w-full sm:w-auto justify-center"
                      >
                        {dict.registration.next}
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn-primary px-6 py-3 text-xs font-bold transition-all shadow-soft cursor-pointer inline-flex items-center gap-1.5 w-full sm:w-auto justify-center"
                      >
                        {dict.registration.submit}
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    )}

                  </div>

                </div>
              </form>
            </div>

            {/* 6. Support/Help Block (Resolves vertical empty space) */}
            <div className="bg-white rounded-[1.5rem] border border-[#E7E0D2] p-6 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-start">
                <h4 className="text-xs font-extrabold text-[#1F4D36] uppercase tracking-wider">
                  {locale === 'ar' ? 'هل تحتاج إلى مساعدة في التسجيل؟' : 'Need help with registration?'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  {locale === 'ar' 
                    ? 'يمكن لموظفي الميدان أو أعضاء اللجنة المحلية مساعدة الأسر التي لا تستطيع إكمال النموذج بمفردها.' 
                    : 'Field staff or local committee members can assist families who cannot complete the form alone.'}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
                <a
                  href={`/${locale}/contact`}
                  className="btn-secondary text-[10px] font-bold px-4 py-2.5 bg-white shadow-sm border border-gray-250 w-full sm:w-auto text-center cursor-pointer"
                >
                  {locale === 'ar' ? 'اتصل باللجنة المحلية' : 'Contact Local Committee'}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - 3. Application Summary Panel */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="hidden lg:block">
  
            <div className="bg-white rounded-[1.5rem] border border-[#E7E0D2]/60 p-6 shadow-sm space-y-5 bg-gradient-to-b from-white to-gray-50/30">
              <h3 className="text-xs font-extrabold text-[#9A6B3F] uppercase tracking-widest border-b border-[#E7E0D2]/50 pb-2">
                {dict.registration.summaryTitle}
              </h3>
              
              <div className="space-y-4 text-xs font-semibold text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.applicationNumber}</span>
                  <span className="font-mono text-[11px] font-medium text-primary-800 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{appNumber}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{locale === 'ar' ? 'القسم الحالي' : 'Current Step'}</span>
                  <span className="text-primary-900 font-semibold">Section {step} of {totalSteps}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.statusLabel}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {dict.registration.statusValue}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.estTimeLabel}</span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-3.5 h-3.5" />
                    {dict.registration.estTimeValue}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.protectionLabel}</span>
                  <span className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold text-[10px] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {dict.registration.protectionValue}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{dict.registration.langLabel}</span>
                  <span className="uppercase text-[10px] font-bold text-primary-900 bg-gray-50 px-2.5 py-1 rounded border border-gray-150/40">
                    {locale}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E7E0D2]/50 text-center">
                <p className="text-[10px] text-gray-400 leading-relaxed font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  RESTRICTED ACCESS DATABASE
                </p>
              </div>
            </div>
                      </div>
</div>

        </div>

      </div>
    </div>
  );
}
