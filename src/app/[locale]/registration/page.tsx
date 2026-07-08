'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import arDict from '@/dictionaries/ar.json';
import enDict from '@/dictionaries/en.json';
import { generateApplicationNumber, cn } from '@/lib/utils';
import { 
  CheckCircle as CheckCircle2, 
  CaretRight as ChevronRight, 
  CaretLeft as ChevronLeft, 
  PaperPlaneRight as Send, 
  ShieldWarning as ShieldAlert, 
  Clock, 
  ShieldCheck, 
  Check, 
  LockKey as Lock,
  Target,
  Tree,
  MagnifyingGlass
} from '@phosphor-icons/react';
import { isRTL } from '@/lib/i18n/config';

export default function RegistrationPage() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] || 'ar') as Locale;
  const dict = locale === 'ar' ? arDict : enDict;
  const rtl = isRTL(locale);

  const [step, setStep] = useState(1);
  const [appNumber, setAppNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDraftToast, setShowDraftToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [website, setWebsite] = useState('');

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
  });

  useEffect(() => {
    setAppNumber(generateApplicationNumber());
  }, []);

  const totalSteps = 7;

  const steps = locale === 'ar' ? [
    'معلومات الأسرة',
    'التعليم والدخل',
    'ملف الصمغ العربي',
    'الملف الزراعي',
    'ملف الثروة الحيوانية',
    'تقييم الاحتياجات',
    'الموافقة والإرسال'
  ] : [
    'Family Information',
    'Education & Income',
    'Gum Arabic Profile',
    'Agriculture Profile',
    'Livestock Profile',
    'Needs Assessment',
    'Consent & Submit'
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
      if (!formData.consent1) stepErrors.consent1 = locale === 'ar' ? 'يجب تأكيد الموافقة للمتابعة' : 'Consent is required to proceed';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(7)) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationNumber: appNumber,
          locale,
          headOfFamilyName: formData.headOfFamily,
          phoneNumber: formData.phone,
          village: formData.village,
          idNumber: formData.idNumber,
          idDocType: formData.idDocType,
          householdSize: formData.householdSize,
          childrenCount: formData.childrenCount,
          womenCount: formData.womenCount,
          youthCount: formData.youthCount,
          schoolChildren: formData.schoolChildren,
          hasDisabled: formData.hasDisabled,
          mainIncome: formData.mainIncome,
          monthlyIncome: formData.monthlyIncome,
          treeCount: formData.treeCount,
          annualProduction: formData.annualProduction,
          hasLand: formData.hasLand,
          landSize: formData.landSize,
          waterSource: formData.waterSource,
          crops: formData.crops,
          suitableForTomato: formData.suitableForTomato,
          cattleCount: formData.cattleCount,
          sheepGoatCount: formData.sheepGoatCount,
          hasMilkProduction: formData.hasMilkProduction,
          hasVetSupport: formData.hasVetSupport,
          mostUrgentNeed: formData.mostUrgentNeed,
          trainingNeed: formData.trainingNeed,
          notes: formData.notes,
          consent1: formData.consent1,
          consent2: formData.consent1,
          consent3: formData.consent1,
          consent4: formData.consent1,
          website,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(
          locale === 'ar'
            ? 'فشل إرسال الطلب للمراجعة الداخلية. يرجى المحاولة مرة أخرى أو التواصل مع اللجنة المحلية.'
            : 'Internal review submission failed. Please try again or contact the local committee.'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        locale === 'ar'
          ? 'فشل إرسال الطلب للمراجعة الداخلية. يرجى المحاولة مرة أخرى أو التواصل مع اللجنة المحلية.'
          : 'Internal review submission failed. Please try again or contact the local committee.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const infoCards = locale === 'ar' ? [
    {
      title: '٥٠٠ أسرة',
      desc: 'المستهدف في المرحلة الأولى من التسجيل المجتمعي',
      icon: <Target className="w-5 h-5 text-[#9A6B3F]" />
    },
    {
      title: 'منتجو الصمغ العربي',
      desc: 'رعاية أشجار الهشاب والطلح، التدريب والجني المستدام',
      icon: <Tree className="w-5 h-5 text-[#9A6B3F]" />
    },
    {
      title: 'مراجعة داخلية محدودة',
      desc: 'البيانات الشخصية لن يتم نشرها للعامة',
      icon: <Lock className="w-5 h-5 text-[#9A6B3F]" />
    },
    {
      title: 'التحقق الميداني',
      desc: 'سيتم التحقق من معلومات التربة والمياه وتجارب المحاصيل خلال التقييم الميداني',
      icon: <MagnifyingGlass className="w-5 h-5 text-[#9A6B3F]" />
    }
  ] : [
    {
      title: '500 Households',
      desc: 'First-phase community registration target',
      icon: <Target className="w-5 h-5 text-[#9A6B3F]" />
    },
    {
      title: 'Gum Arabic Producers',
      desc: 'Hashab and Talh tree care, training and sustainable harvesting',
      icon: <Tree className="w-5 h-5 text-[#9A6B3F]" />
    },
    {
      title: 'Restricted internal review',
      desc: 'Personal data is not published publicly',
      icon: <Lock className="w-5 h-5 text-[#9A6B3F]" />
    },
    {
      title: 'Field verification',
      desc: 'Soil, water and crop trial information will be verified during field assessment',
      icon: <MagnifyingGlass className="w-5 h-5 text-[#9A6B3F]" />
    }
  ];

  const renderSidePanel = () => (
    <div className="space-y-4">
      <h3 className="text-xs font-extrabold text-[#9A6B3F] uppercase tracking-widest border-b border-[#E7E0D2]/50 pb-2 mb-3">
        {locale === 'ar' ? 'معلومات البرنامج' : 'Program Information'}
      </h3>
      {infoCards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-2xl border border-[#E7E0D2]/50 p-4 shadow-sm flex items-start gap-3 bg-gradient-to-b from-white to-gray-50/20">
          <div className="w-9 h-9 rounded-xl bg-[#FAF7EF] flex items-center justify-center shrink-0">
            {card.icon}
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-extrabold text-gray-900 leading-tight">{card.title}</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed font-semibold">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF7EF] py-24 px-4 flex items-center justify-center" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="max-w-xl w-full text-center bg-white rounded-[2rem] border border-[#E7E0D2] shadow-soft p-8 md:p-12 relative">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-7 h-7 text-emerald-800" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary-900 mb-3 font-sans">
            {locale === 'ar' ? 'تم إرسال التسجيل للمراجعة بنجاح' : 'Submitted for Internal Review Successfully'}
          </h1>
          <p className="text-xs text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
            {locale === 'ar' 
              ? 'تم استلام معلومات هانك بنجاح للمراجعة الداخلية والتقييم الميداني.' 
              : 'Your family registration details have been received for internal review and field verification.'}
          </p>
          
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
      
      {/* Toast notification */}
      {showDraftToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#123524] text-white px-5 py-3 rounded-xl shadow-lg border border-[#1F4D36] flex items-center gap-2.5 transition-all animate-fade-in">
          <Check className="w-4 h-4 text-[#F4E8D0]" />
          <span className="text-xs font-bold">{locale === 'ar' ? 'حفظ كمسودة — قريباً' : 'Save Draft — Coming Soon'}</span>
        </div>
      )}

      <div className="ngo-container max-w-6xl mx-auto space-y-8">
        
        {/* 1. Page Intro / Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4E8D0]/40 border border-[#E7E0D2]/80 text-[10px] font-bold uppercase tracking-widest text-[#9A6B3F]">
            {locale === 'ar' ? 'مراجعة داخلية محدودة' : 'Restricted Internal Review'}
          </span>
          <h1 className="text-2xl md:text-3.5xl font-extrabold text-[#123524] tracking-tight">
            {locale === 'ar' ? 'تسجيل الأسر' : 'Household Registration'}
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-semibold">
            {locale === 'ar' 
              ? 'جمع معلومات الأسر بطريقة محترمة وبموافقة أصحابها، لدعم التدريب، ورعاية أشجار الصمغ العربي، والتخطيط التنموي المستقبلي.'
              : 'Collecting respectful, consent-based household information to support training, gum arabic tree care, and future rural development planning.'}
          </p>
        </div>

        {/* 2. Privacy / Purpose Notice */}
        <div className="bg-[#FAF7EF]/90 rounded-2xl p-5 border border-[#E7E0D2] shadow-soft max-w-3xl mx-auto flex items-start gap-4 transition-all">
          <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-850 shrink-0">
            <Lock className="w-5 h-5 text-[#123524]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-extrabold text-primary-900 uppercase tracking-wider">
              {locale === 'ar' ? 'إشعار السرية ومطابقة البيانات' : 'Protected Internal Records Notice'}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              {locale === 'ar'
                ? 'تُistخدم المعلومات الشخصية فقط للمراجعة الداخلية، وتقييم الاحتياجات، وتنسيق التدريب، والتخطيط لفرص الدعم المستقبلية. ولا يتم نشرها للعامة.'
                : 'Personal information is used only for internal review, needs assessment, training coordination and future support planning. It is not published publicly.'}
            </p>
          </div>
        </div>

        {/* Desktop grid layout: left forms + right side details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Block (Form and Stepper) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 3. Stepper (Progress card) */}
            <div className="bg-white rounded-3xl border border-[#E7E0D2]/70 p-6 shadow-soft overflow-x-auto scrollbar-none">
              {/* Desktop Stepper */}
              <div className="hidden md:flex justify-between items-center relative px-2">
                {steps.map((label, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 relative z-10">
                    <button
                      type="button"
                      onClick={() => {
                        if (idx + 1 < step) {
                          setStep(idx + 1);
                        } else if (idx + 1 > step && validateStep(step)) {
                          setStep(idx + 1);
                        }
                      }}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer border",
                        step > idx + 1 
                          ? 'bg-[#3F7D4A]/10 border-[#3F7D4A]/30 text-[#3F7D4A]' 
                          : step === idx + 1 
                            ? 'bg-[#123524] border-[#123524] text-white ring-4 ring-[#123524]/10 scale-105 shadow-sm' 
                            : 'bg-gray-50 border-gray-200 text-gray-400'
                      )}
                    >
                      {step > idx + 1 ? <Check className="w-4 h-4" /> : idx + 1}
                    </button>
                    <span className={cn(
                      "text-[10px] font-bold mt-2.5 text-center max-w-[80px] leading-tight transition-colors",
                      step === idx + 1 ? 'text-[#123524] font-extrabold' : 'text-gray-400'
                    )}>{label}</span>
                  </div>
                ))}
                {/* Stepper Connecting Line */}
                <div className="absolute top-4 left-10 right-10 h-[2px] bg-gray-100 z-0">
                  <div 
                    className="h-full bg-[#123524] transition-all duration-500" 
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Mobile Stepper - Mini Steps Indicator */}
              <div className="flex md:hidden items-center justify-between">
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                  {locale === 'ar' ? `القسم ${step} من ${totalSteps}` : `Step ${step} of ${totalSteps}`}
                </span>
                <div className="flex gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        step === idx + 1 ? "w-6 bg-[#123524]" : "w-1.5 bg-gray-200"
                      )} 
                    />
                  ))}
                </div>
                <span className="text-[10px] font-extrabold text-[#123524]">
                  {steps[step - 1]}
                </span>
              </div>
            </div>

            {/* Mobile support module cards - side panel becomes top/bottom cards on mobile */}
            <div className="lg:hidden space-y-4">
              <div className="bg-white rounded-3xl border border-[#E7E0D2]/60 p-6 shadow-sm space-y-4">
                <h3 className="text-xs font-extrabold text-[#9A6B3F] uppercase tracking-widest border-b border-[#E7E0D2]/50 pb-2">
                  {locale === 'ar' ? 'معلومات التسجيل والمستهدف' : 'Registration Information'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {infoCards.map((card, idx) => (
                    <div key={idx} className="bg-[#FAF7EF]/20 rounded-xl border border-[#E7E0D2]/40 p-4 flex items-start gap-3">
                      <div className="w-8.5 h-8.5 rounded-lg bg-[#FAF7EF] flex items-center justify-center shrink-0">
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 leading-tight">{card.title}</h4>
                        <p className="text-[10px] text-gray-500 mt-1 font-semibold leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Multi-step Form Card (rounded-3xl, shadow, cream border) */}
            <div className="bg-white rounded-3xl border border-[#E7E0D2]/80 shadow-soft overflow-hidden">
              
              <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100/70 flex justify-between items-center">
                <span className="text-[10px] font-extrabold text-primary-900 uppercase tracking-wider">
                  {steps[step - 1]}
                </span>
                <span className="text-[10px] font-bold text-gray-400 font-mono">
                  {appNumber}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
                
                {/* Step 1: Family Information */}
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">
                          {dict.registration.headOfFamily} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.headOfFamily}
                          onChange={(e) => handleInputChange('headOfFamily', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400 focus:ring-4 focus:ring-[#123524]/5",
                            errors.headOfFamily ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/5" : "border-gray-200"
                          )} 
                          placeholder={locale === 'ar' ? 'مثال: علي أحمد' : 'e.g. Ali Ahmed'} 
                        />
                        {errors.headOfFamily && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.headOfFamily}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">
                          {dict.registration.phone} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400 focus:ring-4 focus:ring-[#123524]/5",
                            errors.phone ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/5" : "border-gray-200"
                          )} 
                          placeholder="+249..." 
                          dir="ltr"
                        />
                        {errors.phone && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.phone}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">
                          {dict.registration.village} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.village}
                          onChange={(e) => handleInputChange('village', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400 focus:ring-4 focus:ring-[#123524]/5",
                            errors.village ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/5" : "border-gray-200"
                          )} 
                          placeholder={locale === 'ar' ? 'مثال: أم رمطة' : 'e.g. Um Rimta'} 
                        />
                        {errors.village && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.village}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">
                          {dict.registration.idNumber} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.idNumber}
                          onChange={(e) => handleInputChange('idNumber', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400 focus:ring-4 focus:ring-[#123524]/5",
                            errors.idNumber ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/5" : "border-gray-200"
                          )} 
                          placeholder={locale === 'ar' ? 'رقم الهوية الوطنية' : 'National ID Number'} 
                        />
                        {errors.idNumber && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.idNumber}</span>}
                      </div>
                    </div>

                    {/* Grouped section: Members */}
                    <div className="pt-6 border-t border-gray-150/40">
                      <h4 className="text-[11px] font-extrabold text-[#9A6B3F] uppercase tracking-widest pb-2 border-b border-gray-100 mb-4">
                        {locale === 'ar' ? 'تكوين الأسرة والتركيبة السكانية' : 'Household Composition & Demographics'}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-gray-650 mb-2">{dict.registration.householdSize}</label>
                          <input 
                            type="number" 
                            min="1" 
                            value={formData.householdSize}
                            onChange={(e) => handleInputChange('householdSize', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gray-650 mb-2">{dict.registration.childrenCount}</label>
                          <input 
                            type="number" 
                            min="0" 
                            value={formData.childrenCount}
                            onChange={(e) => handleInputChange('childrenCount', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gray-650 mb-2">{dict.registration.womenCount}</label>
                          <input 
                            type="number" 
                            min="0" 
                            value={formData.womenCount}
                            onChange={(e) => handleInputChange('womenCount', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gray-650 mb-2">{dict.registration.youthCount}</label>
                          <input 
                            type="number" 
                            min="0" 
                            value={formData.youthCount}
                            onChange={(e) => handleInputChange('youthCount', e.target.value)}
                            className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                            placeholder="0" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-650 mb-2">{dict.registration.schoolChildren}</label>
                        <input 
                          type="number" 
                          min="0" 
                          value={formData.schoolChildren}
                          onChange={(e) => handleInputChange('schoolChildren', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.hasDisabled}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasDisabled === 'yes' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasDisabled === 'no' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                    <div className="pt-6 border-t border-gray-150/40">
                      <div className="bg-[#FAF7EF]/40 border border-[#E7E0D2]/60 rounded-2xl p-5 flex items-start gap-4">
                        <div className="bg-[#F4E8D0]/60 p-2.5 rounded-xl text-earth-700 shrink-0">
                          <ShieldAlert className="w-5 h-5 text-[#9A6B3F]" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">
                            {locale === 'ar' ? 'وثائق الهوية والتسجيل التجريبي' : 'Identity Verification & Staging limits'}
                          </h5>
                          <p className="text-gray-655 text-[11px] leading-relaxed font-semibold">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">
                          {dict.registration.mainIncome} <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.mainIncome}
                          onChange={(e) => handleInputChange('mainIncome', e.target.value)}
                          className={cn(
                            "w-full h-12 rounded-lg px-4 border text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white transition-all placeholder-gray-400 focus:ring-4 focus:ring-[#123524]/5",
                            errors.mainIncome ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/5" : "border-gray-200"
                          )} 
                          placeholder={locale === 'ar' ? 'مثال: الصمغ العربي، الزراعة البسيطة' : 'e.g. Gum Arabic, Simple Farming'} 
                        />
                        {errors.mainIncome && <span className="text-[10px] text-rose-500 font-bold block mt-1">{errors.mainIncome}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.monthlyIncome}</label>
                        <input 
                          type="number" 
                          value={formData.monthlyIncome}
                          onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder={locale === 'ar' ? 'المبلغ بالجنيه السوداني' : 'Amount in Sudanese Pounds'} 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Gum Arabic Profile */}
                {step === 3 && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.treeCount}</label>
                        <input 
                          type="number" 
                          value={formData.treeCount}
                          onChange={(e) => handleInputChange('treeCount', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.annualProduction}</label>
                        <input 
                          type="text" 
                          value={formData.annualProduction}
                          onChange={(e) => handleInputChange('annualProduction', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder={locale === 'ar' ? 'مثال: ١٥٠ كجم' : 'e.g. 150 kg'} 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Agriculture Profile */}
                {step === 4 && (
                  <div className="space-y-8 animate-fade-in">
                    <h4 className="text-[11px] font-extrabold text-[#9A6B3F] uppercase tracking-widest pb-2 border-b border-gray-100 mb-4">
                      {locale === 'ar' ? 'بيانات الأراضي والمحاصيل التجريبية' : 'Land Details & Trial Crop Suitability'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.hasLand}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasLand === 'yes' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasLand === 'no' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.landSize}</label>
                        <input 
                          type="text" 
                          value={formData.landSize}
                          onChange={(e) => handleInputChange('landSize', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder={locale === 'ar' ? 'مثال: ٥ أفدنة' : 'e.g. 5 Feddans'} 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.waterSource}</label>
                        <input 
                          type="text" 
                          value={formData.waterSource}
                          onChange={(e) => handleInputChange('waterSource', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder={locale === 'ar' ? 'تمت الإشارة محلياً إلى توفر المياه وسيتم التحقق من ذلك' : 'Reported local access (to be verified)'} 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.crops}</label>
                        <input 
                          type="text" 
                          value={formData.crops}
                          onChange={(e) => handleInputChange('crops', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder={locale === 'ar' ? 'مثال: محاصيل تجريبية كبذور الطماطم والخضروات' : 'e.g. Trial vegetables, sorghum'} 
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.suitableForTomato}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.suitableForTomato === 'yes' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.suitableForTomato === 'no' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                    <h4 className="text-[11px] font-extrabold text-[#9A6B3F] uppercase tracking-widest pb-2 border-b border-gray-100 mb-4">
                      {locale === 'ar' ? 'أصول الثروة الحيوانية والاحتياجات' : 'Livestock Assets & Feed Needs'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.cattleCount}</label>
                        <input 
                          type="number" 
                          value={formData.cattleCount}
                          onChange={(e) => handleInputChange('cattleCount', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.sheepGoatCount}</label>
                        <input 
                          type="number" 
                          value={formData.sheepGoatCount}
                          onChange={(e) => handleInputChange('sheepGoatCount', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder="0" 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.hasMilkProduction}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasMilkProduction === 'yes' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasMilkProduction === 'no' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.hasVetSupport}</label>
                        <div className="flex gap-4">
                          <label className={cn(
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasVetSupport === 'yes' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                            "flex items-center gap-2 cursor-pointer py-3 px-6 rounded-xl border text-xs font-bold transition-all flex-1 justify-center",
                            formData.hasVetSupport === 'no' ? 'bg-[#123524]/5 border-[#123524] text-[#123524]' : 'border-gray-200 bg-white hover:bg-gray-50'
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.mostUrgentNeed}</label>
                        <select 
                          value={formData.mostUrgentNeed}
                          onChange={(e) => handleInputChange('mostUrgentNeed', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-850 font-semibold focus:border-primary-800 outline-none bg-white cursor-pointer focus:ring-4 focus:ring-[#123524]/5"
                        >
                          <option value="">-- {locale === 'ar' ? 'حدد الاحتياج الأساسي' : 'Select Urgent Need'} --</option>
                          <option value="water">{dict.registration.waterNeed}</option>
                          <option value="seeds">{dict.registration.agricultureSupport}</option>
                          <option value="training">{dict.registration.trainingNeed}</option>
                          <option value="other">{locale === 'ar' ? 'أخرى' : 'Other'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.trainingNeed}</label>
                        <input 
                          type="text" 
                          value={formData.trainingNeed}
                          onChange={(e) => handleInputChange('trainingNeed', e.target.value)}
                          className="w-full h-12 rounded-lg px-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white focus:ring-4 focus:ring-[#123524]/5 placeholder-gray-400" 
                          placeholder={locale === 'ar' ? 'مثال: تقليم الأشجار، رعاية الأعلاف' : 'e.g. Tree Pruning, Fodder Care'} 
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-bold text-[#123524] mb-2">{dict.registration.notes}</label>
                      <textarea 
                        rows={4} 
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="w-full rounded-lg p-4 border border-gray-200 text-sm text-gray-800 font-semibold focus:border-primary-800 outline-none bg-white resize-none placeholder-gray-400 focus:ring-4 focus:ring-[#123524]/5" 
                        placeholder={locale === 'ar' ? 'أي ملاحظات إضافية أو تعليقات...' : 'Additional notes or support comments...'}
                      />
                    </div>
                  </div>
                )}

                {/* Step 7: Consent & Submit */}
                {step === 7 && (
                  <div className="space-y-8 animate-fade-in">
                    
                    {/* Consent Checkboxes */}
                    <div className="bg-[#FAF7EF]/80 border border-[#E7E0D2] rounded-2xl p-6 space-y-4">
                      
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={formData.consent1}
                          onChange={(e) => handleInputChange('consent1', e.target.checked)}
                          className="mt-1 w-5 h-5 text-primary-800 border-gray-300 rounded focus:ring-primary-800 cursor-pointer transition-colors" 
                        />
                        <span className="text-gray-850 text-xs font-bold select-none group-hover:text-primary-950 leading-relaxed">
                          {locale === 'ar' 
                            ? 'أؤكد أن المعلومات المقدمة يمكن استخدامها للمراجعة الداخلية للمشروع، وتقييم الاحتياجات، وتنسيق التدريب، والتخطيط لفرص الدعم المستقبلية. وأفهم أن المعلومات الشخصية لن يتم نشرها للعامة.' 
                            : 'I confirm that the information provided may be used for internal project review, needs assessment, training coordination and future support planning. I understand that personal information will not be published publicly.'}
                        </span>
                      </label>

                    </div>

                    {/* Validation Errors for Consent checkbox */}
                    {errors.consent1 && (
                      <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
                        <p className="text-xs text-rose-600 font-bold leading-relaxed">
                          {errors.consent1}
                        </p>
                      </div>
                    )}

                    {/* Honeypot anti-spam field */}
                    <div style={{ display: 'none' }}>
                      <label>Leave this field empty</label>
                      <input 
                        type="text" 
                        name="website" 
                        value={website} 
                        onChange={(e) => setWebsite(e.target.value)} 
                        autoComplete="off" 
                      />
                    </div>

                    {/* API Submission Error Alert */}
                    {submitError && (
                      <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 animate-fade-in">
                        <p className="text-xs text-rose-600 font-bold leading-relaxed">
                          {submitError}
                        </p>
                      </div>
                    )}

                    {/* Anonymous Statistics note */}
                    <p className="text-[10px] text-gray-400 leading-relaxed font-bold uppercase tracking-wider text-center">
                      {locale === 'ar'
                        ? 'ملاحظة: سجلات داخلية محمية ومجهولة الهوية لأغراض التخطيط والتقييم فقط.'
                        : 'Note: Protected internal records for planning and training evaluation purposes only.'}
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
                      "px-5 py-3 border border-gray-200 rounded-xl text-gray-700 text-xs font-extrabold hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer inline-flex items-center gap-1.5 w-full sm:w-auto justify-center",
                      step === 1 ? 'invisible sm:hidden' : ''
                    )}
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                    {locale === 'ar' ? 'السابق' : 'Previous'}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto sm:ms-auto">
                    
                    {/* Save progress Draft Button */}
                    <button
                      type="button"
                      onClick={handleSaveDraft}
                      className="px-5 py-3 text-xs font-extrabold text-gray-450 hover:text-gray-700 hover:bg-gray-50/50 rounded-xl transition-all w-full sm:w-auto justify-center inline-flex items-center cursor-pointer border border-transparent hover:border-gray-200"
                    >
                      {locale === 'ar' ? 'حفظ كمسودة — قريباً' : 'Save Draft — Coming Soon'}
                    </button>

                    {/* Next / Submit Button */}
                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary px-6 py-3 text-xs font-bold transition-all shadow-soft cursor-pointer inline-flex items-center gap-1.5 w-full sm:w-auto justify-center"
                      >
                        {locale === 'ar' ? 'التالي' : 'Next'}
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary px-6 py-3 text-xs font-bold transition-all shadow-soft cursor-pointer inline-flex items-center gap-1.5 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            {locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                            <Clock className="w-3.5 h-3.5 animate-spin" />
                          </>
                        ) : (
                          <>
                            {locale === 'ar' ? 'إرسال للمراجعة الداخلية' : 'Submit for Internal Review'}
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}

                  </div>

                </div>
              </form>
            </div>

            {/* 6. Support/Help Block */}
            <div className="bg-white rounded-3xl border border-[#E7E0D2]/70 p-6 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-start">
                <h4 className="text-xs font-extrabold text-[#123524] uppercase tracking-wider">
                  {locale === 'ar' ? 'هل تحتاج إلى مساعدة في إكمال النموذج؟' : 'Need help with registration?'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  {locale === 'ar' 
                    ? 'يمكن لمرشدي الميدان أو أعضاء اللجنة المحلية مساعدة الأسر التي لا تستطيع إكمال النموذج بمفردها.' 
                    : 'Field trainers or local committee members can assist families who cannot complete the form alone.'}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
                <a
                  href={`/${locale}/contact`}
                  className="btn-secondary text-[10px] font-bold px-4 py-2.5 bg-white shadow-sm border border-gray-250 w-full sm:w-auto text-center cursor-pointer rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {locale === 'ar' ? 'اتصل باللجنة المحلية' : 'Contact Local Committee'}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Desktop Side Information Panel */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 hidden lg:block">
            {renderSidePanel()}
          </div>

        </div>

      </div>
    </div>
  );
}
