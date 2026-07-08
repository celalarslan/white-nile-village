// ============================================================
// Mock Data for Development
// Realistic sample data for the White Nile Village Development platform.
// Replace with Supabase queries in production.
// ============================================================

import type {
  Program,
  Project,
  NewsPost,
  Training,
  Certificate,
  DashboardStats,
  Household,
  PartnerApplication,
} from '@/lib/types';

// ============================================================
// Programs (7 programs matching dictionary keys p1–p7)
// ============================================================

export const programs: Program[] = [
  {
    id: 'prog-001',
    titleAr: 'برنامج تطوير الصمغ العربي',
    titleEn: 'Gum Arabic Development Program',
    descriptionAr:
      'دعم المنتجين في تحسين جودة وكمية إنتاج الصمغ العربي من خلال التدريب والتقنيات الحديثة.',
    descriptionEn:
      'Supporting producers in improving the quality and quantity of gum arabic production through training and modern techniques.',
    targetAudienceAr: 'منتجو الصمغ العربي في ولاية النيل الأبيض',
    targetAudienceEn: 'Gum arabic producers in White Nile State',
    expectedImpactAr: 'زيادة إنتاج وجودة الصمغ العربي وتحسين دخل المنتجين',
    expectedImpactEn:
      'Increase gum arabic production quality and improve producer income',
    icon: 'Trees',
    image: '/nile2.webp',
  },
  {
    id: 'prog-002',
    titleAr: 'برنامج رعاية الأشجار وإعادة التشجير',
    titleEn: 'Tree Care & Reforestation Program',
    descriptionAr:
      'حماية الأشجار القائمة وزراعة أشجار جديدة لمكافحة التصحر وزيادة الإنتاج.',
    descriptionEn:
      'Protecting existing trees and planting new ones to combat desertification and increase production.',
    targetAudienceAr: 'المجتمعات المحلية والمنتجون',
    targetAudienceEn: 'Local communities and producers',
    expectedImpactAr: 'زيادة عدد الأشجار وتحسين الغطاء النباتي',
    expectedImpactEn: 'Increase tree count and improve vegetation cover',
    icon: 'Leaf',
    image: '/nile3.webp',
  },
  {
    id: 'prog-003',
    titleAr: 'برنامج الدعم الزراعي',
    titleEn: 'Agriculture Support Program',
    descriptionAr:
      'دعم زراعة الطماطم والخضروات ومحاصيل العلف من خلال التدريب وتوفير البذور.',
    descriptionEn:
      'Supporting tomato, vegetable, and fodder crop farming through training and seed provision.',
    targetAudienceAr: 'المزارعون والأسر الريفية',
    targetAudienceEn: 'Farmers and rural families',
    expectedImpactAr: 'تحسين الأمن الغذائي وزيادة الدخل الزراعي',
    expectedImpactEn: 'Improve food security and increase agricultural income',
    icon: 'Farm',
    image: '/nile5.webp',
  },
  {
    id: 'prog-004',
    titleAr: 'برنامج دعم الثروة الحيوانية',
    titleEn: 'Livestock Support Program',
    descriptionAr:
      'تحسين تربية الماشية من خلال الرعاية البيطرية والتغذية والتدريب.',
    descriptionEn:
      'Improving livestock husbandry through veterinary care, nutrition, and training.',
    targetAudienceAr: 'مربو الماشية والأغنام',
    targetAudienceEn: 'Cattle and sheep/goat herders',
    expectedImpactAr: 'تحسين صحة وإنتاجية الثروة الحيوانية',
    expectedImpactEn: 'Improve livestock health and productivity',
    icon: 'Cow',
    image: '/nile8.webp',
  },
  {
    id: 'prog-005',
    titleAr: 'برنامج تمكين المرأة والشباب',
    titleEn: 'Women & Youth Empowerment Program',
    descriptionAr:
      'إشراك النساء والشباب في برامج التنمية وتوفير فرص التدريب والعمل.',
    descriptionEn:
      'Engaging women and youth in development programs and providing training and employment opportunities.',
    targetAudienceAr: 'النساء والشباب في المناطق الريفية',
    targetAudienceEn: 'Women and youth in rural areas',
    expectedImpactAr: 'زيادة مشاركة المرأة والشباب في الاقتصاد المحلي',
    expectedImpactEn:
      'Increase women and youth participation in local economy',
    icon: 'Users',
    image: '/nile4.webp',
  },
  {
    id: 'prog-006',
    titleAr: 'برنامج التدريب والشهادات',
    titleEn: 'Training & Certification Program',
    descriptionAr:
      'تقديم برامج تدريبية متخصصة ومنح شهادات معتمدة للمشاركين.',
    descriptionEn:
      'Providing specialized training programs and issuing certified certificates to participants.',
    targetAudienceAr: 'المنتجون والمزارعون ومربو الماشية',
    targetAudienceEn: 'Producers, farmers, and livestock herders',
    expectedImpactAr: 'رفع كفاءة ومهارات المنتجين',
    expectedImpactEn: 'Enhance producer skills and competencies',
    icon: 'GraduationCap',
    image: '/nile6.webp',
  },
  {
    id: 'prog-007',
    titleAr: 'برنامج البيانات والأثر الاجتماعي',
    titleEn: 'Rural Data & Social Impact Program',
    descriptionAr:
      'جمع وتحليل البيانات لقياس الأثر الاجتماعي وتوجيه البرامج.',
    descriptionEn:
      'Collecting and analyzing data to measure social impact and guide programs.',
    targetAudienceAr: 'جميع المستفيدين والمجتمعات المحلية',
    targetAudienceEn: 'All beneficiaries and local communities',
    expectedImpactAr: 'تحسين استهداف البرامج وقياس الأثر',
    expectedImpactEn: 'Improve program targeting and impact measurement',
    icon: 'ChartLine',
    image: '/nile1.webp',
  },
];

// ============================================================
// Projects (6 projects)
// ============================================================

export const projects: Project[] = [
  {
    id: 'proj-001',
    titleAr: 'مشروع تسجيل 500 أسرة منتجة',
    titleEn: 'Registration of 500 Producer Families',
    descriptionAr:
      'حملة ميدانية شاملة لتسجيل الأسر المنتجة في قرى ولاية النيل الأبيض وجمع بياناتهم الاجتماعية والاقتصادية.',
    descriptionEn:
      'A comprehensive field campaign to register producer families in White Nile State villages and collect their socioeconomic data.',
    status: 'active',
    targetAudience: 'Rural families and gum arabic producers',
    impactIndicators: [
      '500 families registered',
      'Complete socioeconomic database',
      'Needs assessment for each family',
    ],
    startDate: '2026-06-01',
    endDate: '2026-12-31',
    image: '/nile6.webp',
  },
  {
    id: 'proj-002',
    titleAr: 'مشروع زراعة شتلات الهشاب',
    titleEn: 'Hashab Tree Seedling Planting Project',
    descriptionAr:
      'زراعة 5000 شتلة من أشجار الهشاب (الصمغ العربي) في المناطق المتأثرة بالتصحر لزيادة الإنتاج وحماية البيئة.',
    descriptionEn:
      'Planting 5,000 Hashab (gum arabic) tree seedlings in desertification-affected areas to increase production and protect the environment.',
    status: 'planned',
    targetAudience: 'Local communities and gum arabic producers',
    impactIndicators: [
      '5,000 seedlings planted',
      'Survival rate above 70%',
      'Community participation in planting',
    ],
    startDate: '2026-08-01',
    endDate: '2027-03-31',
    image: '/nile3.webp',
  },
  {
    id: 'proj-003',
    titleAr: 'مشروع تدريب المنتجين على تقنيات الطق الحديثة',
    titleEn: 'Producer Training on Modern Tapping Techniques',
    descriptionAr:
      'تدريب 200 منتج على تقنيات الطق الحديثة والمستدامة لزيادة إنتاج الصمغ العربي دون الإضرار بالأشجار.',
    descriptionEn:
      'Training 200 producers on modern and sustainable tapping techniques to increase gum arabic production without harming trees.',
    status: 'preparation',
    targetAudience: 'Gum arabic producers',
    impactIndicators: [
      '200 producers trained',
      'Improved tapping quality',
      'Certificates issued',
    ],
    startDate: '2026-09-15',
    endDate: '2026-11-30',
    image: '/nile2.webp',
  },
  {
    id: 'proj-004',
    titleAr: 'مشروع زراعة الطماطم والخضروات',
    titleEn: 'Tomato & Vegetable Farming Project',
    descriptionAr:
      'دعم 100 أسرة في زراعة الطماطم والخضروات من خلال توفير البذور المحسنة والتدريب على تقنيات الري الحديثة.',
    descriptionEn:
      'Supporting 100 families in tomato and vegetable farming through provision of improved seeds and training on modern irrigation techniques.',
    status: 'planned',
    targetAudience: 'Farmers and rural families',
    impactIndicators: [
      '100 families supported',
      'Improved crop yields',
      'Increased household income',
    ],
    startDate: '2026-10-01',
    endDate: '2027-04-30',
    image: '/nile5.webp',
  },
  {
    id: 'proj-005',
    titleAr: 'مشروع تمكين النساء من خلال تربية الدواجن',
    titleEn: 'Women Empowerment Through Poultry Farming',
    descriptionAr:
      'تمكين 50 امرأة من خلال تدريبهن على تربية الدواجن وتوفير رأس المال الأولي لبدء مشاريع صغيرة.',
    descriptionEn:
      'Empowering 50 women through poultry farming training and providing initial capital for small business startups.',
    status: 'preparation',
    targetAudience: 'Women in rural areas',
    impactIndicators: [
      '50 women trained',
      'Small businesses launched',
      'Income generation for women',
    ],
    image: '/nile4.webp',
  },
  {
    id: 'proj-006',
    titleAr: 'مشروع الرعاية البيطرية المتنقلة',
    titleEn: 'Mobile Veterinary Care Project',
    descriptionAr:
      'توفير خدمات بيطرية متنقلة للقرى النائية لتحسين صحة الثروة الحيوانية وتقليل نفوق الحيوانات.',
    descriptionEn:
      'Providing mobile veterinary services to remote villages to improve livestock health and reduce animal mortality.',
    status: 'planned',
    targetAudience: 'Livestock herders in remote villages',
    impactIndicators: [
      'Villages served',
      'Animals treated',
      'Reduced mortality rates',
    ],
    startDate: '2026-11-01',
    endDate: '2027-06-30',
    image: '/nile8.webp',
  },
];

// ============================================================
// News (3 items)
// ============================================================

export const news: NewsPost[] = [
  {
    id: 'news-001',
    titleAr: 'إطلاق حملة تسجيل الأسر المنتجة في ولاية النيل الأبيض',
    titleEn:
      'Launch of Producer Family Registration Campaign in White Nile State',
    contentAr:
      'أعلنت مبادرة تنمية قرى النيل الأبيض عن إطلاق حملة ميدانية شاملة لتسجيل الأسر المنتجة في القرى المستهدفة. تهدف الحملة إلى تسجيل 500 أسرة وجمع بياناتهم الاجتماعية والاقتصادية لتصميم برامج تنموية مستهدفة. يمكن للأسر التسجيل عبر المنصة الإلكترونية أو من خلال فرق العمل الميدانية.',
    contentEn:
      'The White Nile Village Development initiative announced the launch of a comprehensive field campaign to register producer families in target villages. The campaign aims to register 500 families and collect their socioeconomic data to design targeted development programs. Families can register through the online platform or through field teams.',
    category: 'announcement',
    date: '2026-06-15',
    slug: 'registration-campaign-launch',
  },
  {
    id: 'news-002',
    titleAr: 'توقيع مذكرة تفاهم مع وزارة الزراعة بولاية النيل الأبيض',
    titleEn:
      'MoU Signed with White Nile State Ministry of Agriculture',
    contentAr:
      'وقعت المبادرة مذكرة تفاهم مع وزارة الزراعة والموارد الطبيعية بولاية النيل الأبيض للتعاون في مجالات دعم المنتجين وتوفير البذور المحسنة والخدمات الإرشادية. تتضمن المذكرة أيضاً التعاون في مشروع زراعة شتلات الهشاب وبرامج التدريب الزراعي.',
    contentEn:
      'The initiative signed a Memorandum of Understanding with the Ministry of Agriculture and Natural Resources of White Nile State for cooperation in producer support, provision of improved seeds, and extension services. The MoU also covers collaboration on the Hashab seedling planting project and agricultural training programs.',
    category: 'partnership',
    date: '2026-06-28',
    slug: 'mou-ministry-agriculture',
  },
  {
    id: 'news-003',
    titleAr: 'ورشة عمل حول تقنيات جمع الصمغ العربي المستدامة',
    titleEn: 'Workshop on Sustainable Gum Arabic Harvesting Techniques',
    contentAr:
      'نثمن مشاركة 45 منتجاً من 8 قرى في ورشة العمل التدريبية حول تقنيات جمع الصمغ العربي المستدامة. تناولت الورشة أفضل الممارسات في الطق والجمع والتخزين، وتم توزيع أدوات طق حديثة على المشاركين. أظهر المشاركون حماساً كبيراً لتطبيق التقنيات الجديدة في الموسم القادم.',
    contentEn:
      'We appreciate the participation of 45 producers from 8 villages in the training workshop on sustainable gum arabic harvesting techniques. The workshop covered best practices in tapping, harvesting, and storage, and modern tapping tools were distributed to participants. Participants showed great enthusiasm for applying new techniques in the upcoming season.',
    category: 'training',
    date: '2026-07-05',
    slug: 'gum-arabic-harvesting-workshop',
  },
];

// ============================================================
// Trainings (2 programs)
// ============================================================

export const trainings: Training[] = [
  {
    id: 'train-001',
    titleAr: 'تدريب تقنيات الطق الحديثة للصمغ العربي',
    titleEn: 'Modern Gum Arabic Tapping Techniques Training',
    descriptionAr:
      'تدريب عملي على استخدام أدوات الطق الحديثة وتقنيات الجمع المستدامة لزيادة الإنتاج مع الحفاظ على صحة الأشجار.',
    descriptionEn:
      'Hands-on training on using modern tapping tools and sustainable harvesting techniques to increase production while maintaining tree health.',
    date: '2026-07-05',
    endDate: '2026-07-07',
    location: 'قرية الجبلين / Al-Jabaleen Village',
    category: 'gum-arabic',
    participantCount: 45,
    maxParticipants: 50,
    status: 'completed',
    topics: [
      'Modern tapping tools',
      'Sustainable harvesting',
      'Tree health assessment',
      'Storage best practices',
    ],
  },
  {
    id: 'train-002',
    titleAr: 'تدريب أساسيات تربية الدواجن للنساء',
    titleEn: 'Poultry Farming Basics for Women',
    descriptionAr:
      'تدريب نساء القرى على أساسيات تربية الدواجن وإدارة المشاريع الصغيرة لتمكينهن اقتصادياً.',
    descriptionEn:
      'Training village women on poultry farming basics and small business management for economic empowerment.',
    date: '2026-08-10',
    endDate: '2026-08-14',
    location: 'قرية الدويم / Ed Dueim Village',
    category: 'women-empowerment',
    participantCount: 0,
    maxParticipants: 30,
    status: 'planned',
    topics: [
      'Poultry breeds selection',
      'Feeding and nutrition',
      'Disease prevention',
      'Small business management',
      'Record keeping',
    ],
  },
];

// ============================================================
// Certificates (2 sample certificates)
// ============================================================

export const certificates: Certificate[] = [
  {
    id: 'cert-001',
    certificateNumber: 'CERT-2026-00001',
    participantName: 'عبد الله محمد أحمد',
    trainingId: 'train-001',
    trainingTitleAr: 'تدريب تقنيات الطق الحديثة للصمغ العربي',
    trainingTitleEn: 'Modern Gum Arabic Tapping Techniques Training',
    issueDate: '2026-07-07',
    status: 'valid',
  },
  {
    id: 'cert-002',
    certificateNumber: 'CERT-2026-00002',
    participantName: 'فاطمة إبراهيم عمر',
    trainingId: 'train-001',
    trainingTitleAr: 'تدريب تقنيات الطق الحديثة للصمغ العربي',
    trainingTitleEn: 'Modern Gum Arabic Tapping Techniques Training',
    issueDate: '2026-07-07',
    status: 'valid',
  },
];

// ============================================================
// Dashboard Statistics (realistic starting values)
// ============================================================

export const dashboardStats: DashboardStats = {
  totalFamilies: 12,
  totalPeople: 78,
  totalProducers: 12,
  womenCount: 22,
  youthCount: 18,
  totalGumArabicTrees: 340,
  totalCattle: 45,
  totalSheepGoat: 120,
  trainedPeople: 45,
  certificateCount: 2,
  pendingRegistrations: 3,
  partnerApplications: 0,
};

// ============================================================
// Mock Households (2 sample registrations)
// ============================================================

export const mockHouseholds: Household[] = [
  {
    id: 'hh-001',
    applicationNumber: 'WND-2026-00001',
    village: 'الجبلين',
    region: 'محلية الجبلين',
    headOfFamily: 'عبد الله محمد أحمد',
    phone: '+249912345678',
    idDocumentType: 'بطاقة شخصية',
    idNumber: 'ID-2026-001',
    householdSize: 7,
    childrenCount: 3,
    womenCount: 2,
    youthCount: 1,
    schoolChildrenCount: 2,
    hasDisabledMember: false,
    isLiterate: true,
    educationLevel: 'ثانوي',
    hasVocationalTraining: false,
    mainIncomeSource: 'الصمغ العربي والزراعة',
    monthlyIncome: 15000,
    annualIncome: 180000,
    agricultureIncome: 60000,
    livestockIncome: 30000,
    gumArabicIncome: 80000,
    otherIncome: 10000,
    debtStatus: 'لا يوجد',
    gumArabic: {
      treeCount: 50,
      estimatedAnnualProduction: '200 كجم',
      buyer: 'تاجر محلي',
      averageSellingPrice: 400,
      harvestingMethod: 'الطق التقليدي',
      storageMethod: 'أكياس خيش',
      needsTraining: true,
    },
    agriculture: {
      hasLand: true,
      landSize: '5 فدان',
      waterSource: 'مطري',
      crops: ['ذرة', 'فول سوداني', 'سمسم'],
      suitableForTomato: true,
      hasSeedAccess: false,
      hasIrrigation: false,
    },
    livestock: {
      cattleCount: 3,
      sheepGoatCount: 12,
      hasMilkProduction: true,
      hasFeedProblem: true,
      hasVetSupport: false,
      hasDiseaseProblem: true,
    },
    needs: {
      mostUrgentNeed: 'تدريب على تقنيات الطق الحديثة',
      trainingNeed: 'تحسين جودة الصمغ العربي',
      agricultureSupport: 'بذور محسنة وأسمدة',
      livestockSupport: 'أعلاف ورعاية بيطرية',
      seedlingNeed: 'شتلات هشاب',
      waterNeed: 'مصدر مياه للري',
      womenYouthSupport: 'تدريب النساء على تربية الدواجن',
      notes: 'الأسرة متحمسة للمشاركة في جميع البرامج التدريبية.',
    },
    consentDataUse: true,
    consentPrivacy: true,
    consentAnonymousReporting: true,
    status: 'approved',
    createdAt: '2026-06-15T10:30:00Z',
    updatedAt: '2026-06-20T14:00:00Z',
  },
  {
    id: 'hh-002',
    applicationNumber: 'WND-2026-00002',
    village: 'الدويم',
    region: 'محلية الدويم',
    headOfFamily: 'فاطمة إبراهيم عمر',
    phone: '+249923456789',
    idDocumentType: 'بطاقة شخصية',
    idNumber: 'ID-2026-002',
    householdSize: 5,
    childrenCount: 2,
    womenCount: 2,
    youthCount: 1,
    schoolChildrenCount: 2,
    hasDisabledMember: false,
    isLiterate: true,
    educationLevel: 'جامعي',
    hasVocationalTraining: true,
    mainIncomeSource: 'الزراعة',
    monthlyIncome: 12000,
    annualIncome: 144000,
    agricultureIncome: 90000,
    livestockIncome: 20000,
    gumArabicIncome: 24000,
    otherIncome: 10000,
    gumArabic: {
      treeCount: 20,
      estimatedAnnualProduction: '80 كجم',
      buyer: 'شركة محلية',
      averageSellingPrice: 350,
      harvestingMethod: 'الطق التقليدي',
      storageMethod: 'تخزين منزلي',
      needsTraining: true,
    },
    agriculture: {
      hasLand: true,
      landSize: '3 فدان',
      waterSource: 'بئر',
      crops: ['طماطم', 'بامية', 'ذرة'],
      suitableForTomato: true,
      hasSeedAccess: true,
      hasIrrigation: true,
    },
    livestock: {
      cattleCount: 2,
      sheepGoatCount: 8,
      hasMilkProduction: true,
      hasFeedProblem: true,
      hasVetSupport: false,
      hasDiseaseProblem: false,
    },
    needs: {
      mostUrgentNeed: 'بذور محسنة وأسمدة',
      trainingNeed: 'إدارة المشاريع الصغيرة',
      agricultureSupport: 'تقنيات ري حديثة',
      livestockSupport: 'أعلاف مركزة',
      seedlingNeed: 'شتلات خضروات',
      waterNeed: 'تحسين نظام الري',
      womenYouthSupport: 'تدريب على تربية الدواجن وإدارة المشاريع',
      notes: 'مهتمة بقيادة مجموعة نسائية للإنتاج الزراعي.',
    },
    consentDataUse: true,
    consentPrivacy: true,
    consentAnonymousReporting: true,
    status: 'approved',
    createdAt: '2026-06-18T09:15:00Z',
    updatedAt: '2026-06-22T11:30:00Z',
  },
];

// ============================================================
// Partner Applications (empty — project is starting)
// ============================================================

export const mockPartnerApplications: PartnerApplication[] = [];
