import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/types';
import HeroSection from '@/components/sections/HeroSection';
import { UsersThree as Users, Medal as Award, Tree as Trees, ShieldCheck as Shield, Leaf, Tractor, GraduationCap, FileText, ArrowRight, Sparkle as Sparkles, CheckCircle as CheckCircle2, CaretRight as ChevronRight, Pulse as Activity, Question as HelpCircle } from '@phosphor-icons/react/dist/ssr';
import { isRTL } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { dashboardStats } from '@/lib/data/mockData';

const getNavHref = (locale: string, path: string = "") => {
  const cleanPath = path.replace(/^\/+/, "");
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: String(dict.site?.name || 'White Nile Village Development'),
    description: String(dict.site?.tagline || 'Sustainable Rural Development'),
  };
}

const PAGE_CONTENT = {
  en: {
    snapshot: {
      sub: "Impact Snapshot",
      title: "Targeting Measurable Community Progress",
      card1Title: "500 Target Households",
      card1Desc: "Registered and mapped locally",
      card2Title: "1,000 Producers to Train",
      card2Desc: "Practical agronomy courses",
      card3Title: "5,000 Gum Arabic Trees",
      card3Desc: "Sustainable tapping & protection",
      card4Title: "Women & Youth Inclusion",
      card4Desc: "Direct cooperative participation",
    },
    why: {
      sub: "Context & Urgency",
      title: "Why This Initiative Matters",
      desc: "Rural villages in White Nile State possess rich natural resources, including extensive Hashab acacia forests, but face severe environmental and economic challenges. Traditional harvesting lacks modern techniques, and a lack of organized data makes it difficult for donors to target support. By combining structured training with community cooperatives and reliable registries, we build a model that yields sustainable income and forest conservation.",
      card1Title: "Structured Knowledge is Essential",
      card1Desc: "Traditional farmers need access to modern, sustainable tree tapping and harvesting training to avoid forest depletion.",
      card2Title: "Acacia Forests Require Protection",
      card2Desc: "Desertification threatens the local ecology. Proper gum arabic tree care guarantees long-term environmental stability.",
      card3Title: "Reliable Registries Build Trust",
      card3Desc: "Without clean data, international aid remains ineffective. Verified community registries establish donor confidence.",
    },
    gumArabic: {
      sub: "Forestry & Livelihoods",
      title: "Gum Arabic Trees Are the Foundation of This Model",
      desc: "Acacia senegal trees (locally known as Hashab) are critical to both the economy of Sudan and the global supply chain. This program places tree health and sustainable farming practices at the core of all operations, ensuring local families benefit directly from their harvests.",
      feat1Title: "Sustainable Tree Care",
      feat1Desc: "Teaching pruning techniques that keep trees healthy and productive for decades.",
      feat2Title: "Responsible Harvesting",
      feat2Desc: "Minimizing bark damage through standardized tapping tools and methods.",
      feat3Title: "Quality Standardization",
      feat3Desc: "Sorting and cleaning gum at the source to demand fair international prices.",
      feat4Title: "Seedling Expansion",
      feat4Desc: "Operating local community nurseries to plant new forests and combat desertification.",
    },
    dataModel: {
      sub: "Verified Registries",
      title: "Community Data Model",
      desc: "Our model begins with respectful, consent-based household data collection. We verify local assets and training needs to build anonymous socio-economic profiles. This allows donors to inspect verified, real-time community indicators directly.",
      metric1: "Registered Households",
      metric2: "Acacia Trees Mapped",
      metric3: "Livestock Head Count",
      metric4: "Agricultural Acreage",
      metric5: "Training Requests",
      metric6: "Urgent Clean Water Needs",
      verifiedBadge: "Secure Database",
    },
    programs: {
      sub: "NGO Services",
      title: "Core Programs",
      prog1Title: "Gum Arabic Development",
      prog1Desc: "Technical training, sorting equipment, and marketing assistance for gum harvesters.",
      prog1Tag: "Acacia Senegal Focus",
      prog2Title: "Tree Care & Reforestation",
      prog2Desc: "Protecting local forestry, nursery management, and community seedling distribution.",
      prog2Tag: "Environment",
      prog3Title: "Agriculture Support",
      prog3Desc: "Providing vegetable seeds, tomato farming training, and water irrigation tools.",
      prog3Tag: "Food Security",
      prog4Title: "Livestock Support",
      prog4Desc: "Coordinating veterinary checkups, vaccination campaigns, and fodder security.",
      prog4Tag: "Animal Health",
      prog5Title: "Women & Youth Empowerment",
      prog5Desc: "Enabling direct participation in cooperatives, handcrafting, and small enterprise.",
      prog5Tag: "Inclusion",
      prog6Title: "Training & Certification",
      prog6Desc: "Conducting practical courses on tree care and agriculture with formal certificates.",
      prog6Tag: "Education",
      prog7Title: "Rural Data & Social Impact",
      prog7Desc: "Assessing local community indicators to report progress directly to donors.",
      prog7Tag: "Transparency",
      learnMore: "Explore program",
    },
    pathway: {
      sub: "How It Works",
      title: "Training & Certification Pathway",
      step1: "Household Registry",
      step1Desc: "Socio-economic assessment and field mapping.",
      step2: "Agronomy Training",
      step2Desc: "Practical courses on gum arabic and agriculture.",
      step3: "NGO Certification",
      step3Desc: "Issuing formal verified certificates to graduates.",
      step4: "Forest Care",
      step4Desc: "Ongoing monitoring of nurseries and acacia trees.",
      step5: "Cooperative Link",
      step5Desc: "Group organization to secure fair trade pricing.",
    },
    projects: {
      sub: "Active Projects",
      title: "Projects Preview",
      proj1Title: "500 Household Registration Campaign",
      proj1Desc: "Field registration across target rural communities in White Nile State.",
      proj1Tag: "Phase 1 - Active",
      proj2Title: "Acacia Forestry Practical Course",
      proj2Desc: "Providing tools and tapping training to certified local producers.",
      proj2Tag: "Phase 2 - Planned",
      proj3Title: "Hashab Seedling Nursery Expansion",
      proj3Desc: "Distributing 10,000 seedlings to combat desertification and build canopy.",
      proj3Tag: "Phase 2 - Planned",
      impactLabel: "Target Impact:",
    },
    transparency: {
      sub: "Accountability",
      title: "Our Transparency Promise",
      desc: "Trust is built on accountability, consent, and verifiable results. We manage donor resources and community data with the highest institutional standards.",
      item1: "Personal documentation and identity details are strictly protected and never shared.",
      item2: "Donor reports utilize anonymous, aggregated statistics to track program success.",
      item3: "All training attendance and certificate issuances are fully documented.",
      item4: "Local village committees participate in reviewing and steering project directions.",
      item5: "All local operations align strictly with competent Sudan authorities, including Humanitarian Aid Commission (HAC) procedures.",
    },
    partner: {
      title: "Partner with a community-led rural development initiative in White Nile State",
      btn1: "Become a Partner",
      btn2: "Contact the Team",
    }
  },
  ar: {
    snapshot: {
      sub: "لمحة عن الأثر",
      title: "استهداف تقدم مجتمعي ملموس",
      card1Title: "٥٠٠ أسرة ريفية مستهدفة",
      card1Desc: "مسجلة ومحددة جغرافياً بالكامل",
      card2Title: "١,٠٠٠ مزارع متدرب",
      card2Desc: "دورات عملية في الإرشاد الزراعي",
      card3Title: "٥,٠٠٠ شجرة صمغ عربي",
      card3Desc: "رعاية مستدامة وحماية دورية",
      card4Title: "تمكين المرأة والشباب",
      card4Desc: "مشاركة مباشرة في الجمعيات التعاونية",
    },
    why: {
      sub: "السياق والأهمية",
      title: "لماذا تهمنا هذه المبادرة؟",
      desc: "تواجه المجتمعات الريفية في ولاية النيل الأبيض، رغم ثرائها بأشجار الهشاب والطلح، تحديات بيئية واقتصادية كبيرة. وتفتقر طرق الإنتاج التقليدية للتقنيات الحديثة، كما يصعب توجيه الدعم الإنساني لغياب البيانات الدقيقة. تجمع مبادرتنا بين التدريب العملي والتنظيم التعاوني لضمان دخل مستدام وحماية الثروة الحرجية.",
      card1Title: "المعرفة المنظمة أساسية",
      card1Desc: "يحتاج المنتجون لتدريب حديث حول طق الصمغ ورعاية الأشجار لمنع تدهور الغطاء النباتي.",
      card2Title: "أشجار الصمغ تتطلب حماية مستمرة",
      card2Desc: "يهدد الزحف الصحراوي البيئة المحلية؛ الرعاية المنهجية تضمن استدامة الموارد.",
      card3Title: "البيانات الموثوقة تبني الجسور",
      card3Desc: "التسجيل والتوثيق الميداني الدقيق يمنح المانحين والشركاء الثقة الكاملة لتوجيه الدعم.",
    },
    gumArabic: {
      sub: "الغابات وسبل العيش",
      title: "أشجار الصمغ العربي هي أساس هذا النموذج التنموي",
      desc: "تعتبر أشجار الهشاب والطلح ركيزة للاقتصاد الريفي والبيئة السودانية. يضع برنامجنا صحة الأشجار والإنتاج المستدام في قلب أنشطته لضمان عائد مباشر للأسر المنتجة.",
      feat1Title: "رعاية الأشجار المستدامة",
      feat1Desc: "تعليم تقنيات التقليم الصحي لضمان إنتاجية الأشجار لعقود طويلة.",
      feat2Title: "الطق والجمع المسؤول",
      feat2Desc: "الحد من أضرار لحاء الأشجار باستخدام أدوات طق قياسية ومطورة.",
      feat3Title: "تحسين جودة المنتج",
      feat3Desc: "فرز وتنظيف الصمغ في موقع الإنتاج للحصول على أسعار عادلة في الأسواق.",
      feat4Title: "إكثار الشتلات وزراعتها",
      feat4Desc: "إنشاء مشاتل مجتمعية لإنتاج شتلات الهشاب ومحاربة التصحر.",
    },
    dataModel: {
      sub: "سجلات موثقة",
      title: "نموذج البيانات المجتمعية",
      desc: "نبدأ عملياتنا بتسجيل الأسر ميدانياً بعد الحصول على موافقتهم. نقوم بتحليل الاحتياجات التدريبية والأصول لبناء ملفات إحصائية دقيقة تتيح للمانحين الاطلاع على مؤشرات الأثر الحقيقية.",
      metric1: "الأسرة المسجلة",
      metric2: "أشجار الهشاب المحددة",
      metric3: "رؤوس الماشية",
      metric4: "المساحات الزراعية (فدان)",
      metric5: "طلبات التدريب المهني",
      metric6: "احتياجات المياه الصالحة للشرب",
      verifiedBadge: "قاعدة بيانات آمنة",
    },
    programs: {
      sub: "خدمات المنظمة",
      title: "البرامج الأساسية للمبادرة",
      prog1Title: "تطوير الصمغ العربي",
      prog1Desc: "تدريب فني، توفير معدات الفرز، وتسهيل الوصول للأسواق المحلية.",
      prog1Tag: "أشجار الهشاب",
      prog2Title: "رعاية الغابات وإعادة التشجير",
      prog2Desc: "حماية الغابات القائمة، وإدارة المشاتل وتوزيع الشتلات.",
      prog2Tag: "البيئة والغطاء النباتي",
      prog3Title: "دعم القطاع الزراعي",
      prog3Desc: "توفير بذور الخضروات، تدريب مزارعي الطماطم، وتقنيات الري.",
      prog3Tag: "الأمن الغذائي",
      prog4Title: "دعم الثروة الحيوانية",
      prog4Desc: "تنسيق القوافل البيطرية، حملات التطعيم، وتأمين الأعلاف.",
      prog4Tag: "صحة الحيوان",
      prog5Title: "تمكين المرأة والشباب",
      prog5Desc: "دعم المشاركة في الجمعيات التعاونية والمشاريع الإنتاجية الصغيرة.",
      prog5Tag: "الدمج المجتمعي",
      prog6Title: "التدريب المهني والشهادات",
      prog6Desc: "إقامة دورات عملية حول رعاية الأشجار وإصدار شهادات معتمدة.",
      prog6Tag: "التعليم المستمر",
      prog7Title: "البيانات الريفية وقياس الأثر",
      prog7Desc: "رصد وتوثيق المؤشرات الاجتماعية والإنتاجية لعرضها على المانحين.",
      prog7Tag: "الشفافية والمساءلة",
      learnMore: "تفاصيل البرنامج",
    },
    pathway: {
      sub: "كيف نعمل؟",
      title: "مسار التدريب والشهادات المعتمدة",
      step1: "التسجيل الميداني",
      step1Desc: "جمع البيانات الاجتماعية وتحديد المواقع الجغرافية.",
      step2: "التدريب العملي",
      step2Desc: "دورات تطبيقية حول رعاية أشجار الصمغ والزراعة.",
      step3: "الشهادة والاعتماد",
      step3Desc: "إصدار شهادات رسمية للمزارعين والمنتجين المجتازين للتدريب.",
      step4: "المتابعة الميدانية",
      step4Desc: "الزيارات الإرشادية المستمرة لرعاية المشاتل والأشجار.",
      step5: "التنظيم التعاوني",
      step5Desc: "تأسيس مجموعات تعاونية لضمان تسويق عادل للإنتاج.",
    },
    projects: {
      sub: "المشاريع الحالية",
      title: "نظرة على مشاريعنا",
      proj1Title: "حملة تسجيل ٥٠٠ أسرة ريفية",
      proj1Desc: "التسجيل الميداني المستمر للأسر المنتجة في القرى المستهدفة بولاية النيل الأبيض.",
      proj1Tag: "المرحلة الأولى - نشط",
      proj2Title: "الدورة العملية لرعاية الغابات",
      proj2Desc: "توفير أدوات ومعدات الطق وتدريب المنتجين المعتمدين.",
      proj2Tag: "المرحلة الثانية - مخطط",
      proj3Title: "توسيع مشاتل شتلات الهشاب",
      proj3Desc: "إنتاج وتوزيع ١٠,٠٠٠ شتلة لمكافحة التصحر وزيادة الغطاء الشجري.",
      proj3Tag: "المرحلة الثانية - مخطط",
      impactLabel: "الأثر المستهدف:",
    },
    transparency: {
      sub: "المسؤولية والمصداقية",
      title: "ميثاق الشفافية والمساءلة",
      desc: "تأسست مبادرتنا على مبادئ المصداقية والالتزام بحماية المجتمع. نحن ندير الموارد والبيانات وفق أرفع المعايير المؤسسية.",
      item1: "حماية وسرية الوثائق والبيانات الشخصية للأسر بشكل صارم وعدم نشرها.",
      item2: "نشر تقارير المانحين بالاعتماد على إحصاءات عامة ومجهولة الهوية لرصد الأثر.",
      item3: "توثيق حضور الدورات التدريبية وإصدار الشهادات بشكل كامل وسجل رسمي.",
      item4: "مشاركة لجان القرى المحلية في مراجعة وتوجيه مسار ومشاريع المبادرة.",
      item5: "الالتزام التام بالقوانين والإجراءات المعتمدة من السلطات المختصة، بما في ذلك مفوضية العون الإنساني (HAC).",
    },
    partner: {
      title: "شراكتكم معنا تسهم في دعم وتمكين المجتمعات الريفية بولاية النيل الأبيض",
      btn1: "كن شريكاً معنا",
      btn2: "اتصل بفريق العمل",
    }
  }
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const rtl = isRTL(locale as Locale);
  const t = locale === 'ar' ? PAGE_CONTENT.ar : PAGE_CONTENT.en;

  const programs = [
    { id: 'prog-001', key: 'prog1', icon: <Trees className="w-5 h-5" /> },
    { id: 'prog-002', key: 'prog2', icon: <Leaf className="w-5 h-5" /> },
    { id: 'prog-003', key: 'prog3', icon: <Tractor className="w-5 h-5" /> },
    { id: 'prog-004', key: 'prog4', icon: <Activity className="w-5 h-5" /> },
    { id: 'prog-005', key: 'prog5', icon: <Users className="w-5 h-5" /> },
    { id: 'prog-006', key: 'prog6', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'prog-007', key: 'prog7', icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900" dir={rtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Hero Section */}
      <HeroSection locale={locale as Locale} dict={dict} />

      {/* 2. Impact Snapshot */}
      <section className="section-padding bg-[#FAF7EF]/30 border-b border-[#E8E5DD]/45">
        <div className="ngo-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block mb-2">{t.snapshot.sub}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.snapshot.title}</h2>
            <div className="h-0.5 w-12 bg-earth-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-primary-800">
                <Users className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 leading-tight">{t.snapshot.card1Title}</h4>
                <p className="text-xs text-gray-500 mt-1 font-semibold">{t.snapshot.card1Desc}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#FAF7EF] flex items-center justify-center text-earth-650">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 leading-tight">{t.snapshot.card2Title}</h4>
                <p className="text-xs text-gray-500 mt-1 font-semibold">{t.snapshot.card2Desc}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-primary-800">
                <Trees className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 leading-tight">{t.snapshot.card3Title}</h4>
                <p className="text-xs text-gray-500 mt-1 font-semibold">{t.snapshot.card3Desc}</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#FAF7EF] flex items-center justify-center text-earth-650">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 leading-tight">{t.snapshot.card4Title}</h4>
                <p className="text-xs text-gray-500 mt-1 font-semibold">{t.snapshot.card4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Initiative Matters */}
      <section className="section-padding bg-white border-b border-[#E8E5DD]/30">
        <div className="ngo-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block">{t.why.sub}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.why.title}</h2>
              <div className="h-0.5 w-12 bg-earth-500 rounded-full mt-2" />
              <p className="text-sm text-gray-600 leading-relaxed font-semibold pt-4">
                {t.why.desc}
              </p>
            </div>

            {/* Right - Stacked cards */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 bg-[#FAF7EF]/40 rounded-xl border border-[#E8E5DD]/45 flex items-start gap-4">
                <span className="text-primary-800 font-extrabold text-sm mt-0.5">01</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-900 mb-1">{t.why.card1Title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{t.why.card1Desc}</p>
                </div>
              </div>
              <div className="p-5 bg-[#FAF7EF]/40 rounded-xl border border-[#E8E5DD]/45 flex items-start gap-4">
                <span className="text-primary-800 font-extrabold text-sm mt-0.5">02</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-900 mb-1">{t.why.card2Title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{t.why.card2Desc}</p>
                </div>
              </div>
              <div className="p-5 bg-[#FAF7EF]/40 rounded-xl border border-[#E8E5DD]/45 flex items-start gap-4">
                <span className="text-primary-800 font-extrabold text-sm mt-0.5">03</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-900 mb-1">{t.why.card3Title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{t.why.card3Desc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Gum Arabic & Tree Care Focus */}
      <section className="section-padding bg-[#FAF7EF]/10 border-b border-[#E8E5DD]/30">
        <div className="ngo-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-soft p-1.5 bg-white border border-[#E8E5DD]/40">
                <div className="relative w-full h-full rounded-[1.35rem] overflow-hidden bg-gray-150">
                  <Image
                    src="/nile2.png"
                    alt="Acacia Senegal Forests"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block">{t.gumArabic.sub}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.gumArabic.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed font-semibold">
                {t.gumArabic.desc}
              </p>

              {/* 4 Feature Items - clean lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-[#E8E5DD]/40">
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-800 shrink-0" />
                    {t.gumArabic.feat1Title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{t.gumArabic.feat1Desc}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-800 shrink-0" />
                    {t.gumArabic.feat2Title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{t.gumArabic.feat2Desc}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-800 shrink-0" />
                    {t.gumArabic.feat3Title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{t.gumArabic.feat3Desc}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-800 shrink-0" />
                    {t.gumArabic.feat4Title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{t.gumArabic.feat4Desc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Community Data Model */}
      <section className="section-padding bg-white border-b border-[#E8E5DD]/30">
        <div className="ngo-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block">{t.dataModel.sub}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.dataModel.title}</h2>
              <div className="h-0.5 w-12 bg-earth-500 rounded-full mt-2" />
              <p className="text-sm text-gray-600 leading-relaxed font-semibold pt-4">
                {t.dataModel.desc}
              </p>
            </div>

            {/* Dashboard Mockup Panel (Clean lines, not spreadsheet) */}
            <div className="lg:col-span-7 bg-[#FAF7EF]/40 rounded-2xl p-6 border border-[#E8E5DD]/50">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E5DD]/50">
                <span className="text-xs font-extrabold text-primary-900">{t.dataModel.verifiedBadge}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <span className="block text-[8px] font-bold text-gray-450 uppercase tracking-widest">{t.dataModel.metric1}</span>
                  <span className="text-base font-extrabold text-gray-800 block mt-1">{dashboardStats.totalFamilies}</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <span className="block text-[8px] font-bold text-gray-450 uppercase tracking-widest">{t.dataModel.metric2}</span>
                  <span className="text-base font-extrabold text-gray-800 block mt-1">{dashboardStats.totalGumArabicTrees}</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <span className="block text-[8px] font-bold text-gray-450 uppercase tracking-widest">{t.dataModel.metric3}</span>
                  <span className="text-base font-extrabold text-gray-800 block mt-1">{dashboardStats.totalCattle + dashboardStats.totalSheepGoat}</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <span className="block text-[8px] font-bold text-gray-450 uppercase tracking-widest">{t.dataModel.metric4}</span>
                  <span className="text-base font-extrabold text-gray-800 block mt-1">2,400</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <span className="block text-[8px] font-bold text-gray-450 uppercase tracking-widest">{t.dataModel.metric5}</span>
                  <span className="text-base font-extrabold text-gray-800 block mt-1">{dashboardStats.trainedPeople}</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <span className="block text-[8px] font-bold text-gray-450 uppercase tracking-widest">{t.dataModel.metric6}</span>
                  <span className="text-xs font-bold text-earth-650 block mt-1">12 Villages</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Core Programs */}
      <section className="section-padding bg-[#FAF7EF]/20 border-b border-[#E8E5DD]/30">
        <div className="ngo-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block mb-2">{t.programs.sub}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.programs.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8E5DD]/60 shadow-soft hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-850">
                      {prog.icon}
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-earth-600 bg-earth-50 px-2 py-1 rounded">
                      {(t.programs as Record<string, string>)[`${prog.key}Tag`]}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-gray-900 mb-2">
                    {(t.programs as Record<string, string>)[`${prog.key}Title`]}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-4">
                    {(t.programs as Record<string, string>)[`${prog.key}Desc`]}
                  </p>
                </div>
                <Link
                  href={getNavHref(locale, prog.id.startsWith('prog') ? `programs/${prog.id}` : 'training')}
                  className="text-xs text-primary-800 hover:text-primary-950 font-bold inline-flex items-center gap-1 w-fit group"
                >
                  <span>{t.programs.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Training & Certification Pathway */}
      <section className="section-padding bg-white border-b border-[#E8E5DD]/30">
        <div className="ngo-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block mb-2">{t.pathway.sub}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.pathway.title}</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Pathway vertical timeline lines */}
            <div className="absolute top-2 bottom-2 start-4.5 w-[1px] bg-gray-150 z-0" />
            
            <div className="space-y-8 relative z-10">
              {[
                { title: t.pathway.step1, desc: t.pathway.step1Desc },
                { title: t.pathway.step2, desc: t.pathway.step2Desc },
                { title: t.pathway.step3, desc: t.pathway.step3Desc },
                { title: t.pathway.step4, desc: t.pathway.step4Desc },
                { title: t.pathway.step5, desc: t.pathway.step5Desc },
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-9.5 h-9.5 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-800 text-xs font-bold shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-sm font-extrabold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Projects Preview */}
      <section className="section-padding bg-[#FAF7EF]/20 border-b border-[#E8E5DD]/30">
        <div className="ngo-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block mb-2">{t.projects.sub}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.projects.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-[8px] font-bold uppercase tracking-widest text-primary-850 bg-primary-50 px-2.5 py-1 rounded mb-4">
                  {t.projects.proj1Tag}
                </span>
                <h4 className="text-sm font-extrabold text-gray-900 mb-2">{t.projects.proj1Title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-4">{t.projects.proj1Desc}</p>
              </div>
              <div className="pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-450 uppercase tracking-widest">
                {t.projects.impactLabel} <span className="text-primary-800">500 families</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-[8px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2.5 py-1 rounded mb-4">
                  {t.projects.proj2Tag}
                </span>
                <h4 className="text-sm font-extrabold text-gray-900 mb-2">{t.projects.proj2Title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-4">{t.projects.proj2Desc}</p>
              </div>
              <div className="pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-450 uppercase tracking-widest">
                {t.projects.impactLabel} <span className="text-primary-800">1,000 certificates</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#E8E5DD]/60 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block text-[8px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2.5 py-1 rounded mb-4">
                  {t.projects.proj3Tag}
                </span>
                <h4 className="text-sm font-extrabold text-gray-900 mb-2">{t.projects.proj3Title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-4">{t.projects.proj3Desc}</p>
              </div>
              <div className="pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-450 uppercase tracking-widest">
                {t.projects.impactLabel} <span className="text-primary-800">10,000 seedlings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Transparency Promise */}
      <section className="section-padding bg-white border-b border-[#E8E5DD]/30">
        <div className="ngo-container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-earth-600 block mb-2">{t.transparency.sub}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#123524]">{t.transparency.title}</h2>
          </div>

          <div className="bg-[#FAF7EF]/40 rounded-2xl p-8 md:p-10 border border-[#E8E5DD]/50 space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-650 leading-relaxed font-semibold">{t.transparency.item1}</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-655 leading-relaxed font-semibold">{t.transparency.item2}</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-655 leading-relaxed font-semibold">{t.transparency.item3}</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-655 leading-relaxed font-semibold">{t.transparency.item4}</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-655 leading-relaxed font-semibold">{t.transparency.item5}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Partner CTA */}
      <section className="section-padding bg-[#FAF7EF]/20 px-4">
        <div className="ngo-container max-w-4xl bg-white rounded-3xl p-8 md:p-12 border border-[#E8E5DD]/40 shadow-soft text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-earth-650">Join Our Mission</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 leading-tight">
              {t.partner.title}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            <Link
              href={`/${locale}/support`}
              className="btn-primary w-full sm:w-auto text-xs py-3.5"
            >
              {t.partner.btn1}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="btn-secondary w-full sm:w-auto text-xs py-3.5 bg-white"
            >
              {t.partner.btn2}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
