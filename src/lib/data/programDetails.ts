export interface LocalizedProgramDetail {
  id: string;
  slug: string;
  heroImage: string;
  primaryFocusAr: string;
  primaryFocusEn: string;
  targetGroupAr: string;
  targetGroupEn: string;
  expectedImpactAr: string;
  expectedImpactEn: string;
  
  categoryAr: string;
  categoryEn: string;
  titleAr: string;
  titleEn: string;
  shortSummaryAr: string;
  shortSummaryEn: string;
  briefAr: string[];
  briefEn: string[];
  whyItMattersAr: string[];
  whyItMattersEn: string[];
  
  objectivesAr: string[];
  objectivesEn: string[];
  beneficiariesAr: string[];
  beneficiariesEn: string[];
  activitiesAr: string[];
  activitiesEn: string[];
  trainingModulesAr: string[];
  trainingModulesEn: string[];
  implementationPathwayAr: string[];
  implementationPathwayEn: string[];
  expectedOutcomesAr: string[];
  expectedOutcomesEn: string[];
  measurableIndicatorsAr: string[];
  measurableIndicatorsEn: string[];
  safeguardsAr: string[];
  safeguardsEn: string[];
  partnerOpportunitiesAr: string;
  partnerOpportunitiesEn: string;
}

export const programDetails: LocalizedProgramDetail[] = [
  {
    id: 'prog-001',
    slug: 'gum-arabic-development',
    heroImage: '/nile2.webp',
    primaryFocusAr: 'أشجار الهشاب والصمغ العربي',
    primaryFocusEn: 'Acacia Senegal Focus',
    targetGroupAr: 'منتجو الصمغ العربي',
    targetGroupEn: 'Gum Arabic Producers',
    expectedImpactAr: 'تحسين الجودة والإنتاج',
    expectedImpactEn: 'Improve Quality & Production',
    
    categoryAr: 'تركيز على أشجار الهشاب والصمغ العربي',
    categoryEn: 'Acacia Senegal Focus',
    titleAr: 'برنامج تطوير الصمغ العربي',
    titleEn: 'Gum Arabic Development Program',
    shortSummaryAr: 'تعزيز إنتاج الصمغ العربي من خلال تدريب المنتجين، الجمع المستدام، تحسين الجودة، التخزين النظيف، التنظيم المجتمعي، وتحسين فرص الوصول إلى الأسواق.',
    shortSummaryEn: 'Strengthening gum arabic production through producer training, sustainable harvesting, quality improvement, clean storage, community organization and fairer access to markets.',
    
    briefAr: [
      'يُعد برنامج تطوير الصمغ العربي الركيزة الأساسية لمبادرة تنمية قرى النيل الأبيض. يهدف البرنامج إلى مساعدة المنتجين المحليين على تحسين طرق جمع الصمغ العربي وتنظيفه وتخزينه وفرزه وتجهيزه مستقبلاً للتسويق المنظم عبر الجمعيات أو التعاونيات.',
      'لا يتعامل هذا البرنامج مع الأسر الريفية كمصدر للمواد الخام فقط، بل يسعى إلى تحويلهم إلى منتجين منظمين ومدربين ومعروفين، قادرين على حماية أشجارهم وتحسين جودة المنتج والمشاركة بصورة أكثر عدالة في سلسلة القيمة.'
    ],
    briefEn: [
      'The Gum Arabic Development Program is the central pillar of the White Nile Village Development initiative. It supports local producers to improve how gum arabic is collected, cleaned, stored, classified and prepared for future cooperative marketing. The program begins with household registration and producer mapping, then moves into practical field training and product quality improvement.',
      'This program does not treat local families as raw material suppliers only. It aims to turn them into organized, trained and recognized producers who can protect their trees, increase quality and participate more fairly in the value chain.'
    ],
    
    whyItMattersAr: [
      'في كثير من المجتمعات الريفية توجد أشجار الصمغ العربي بالفعل، لكن المنتجين غالباً يفتقرون إلى التدريب المنظم، ومعايير الجودة، والتخزين الجيد، والمعلومات السوقية الموثوقة. كما أن طرق الجرح والجمع الخاطئة قد تضر بالشجرة وتقلل الإنتاج المستقبلي وتضعف دخل الأسرة على المدى الطويل.',
      'من خلال البدء بالتعليم والتنظيم، يساعد البرنامج على حماية الأشجار وتحسين القيمة الاقتصادية للصمغ العربي لصالح الأسر المنتجة.'
    ],
    whyItMattersEn: [
      'In many rural communities, gum arabic trees already exist, but producers often lack access to structured training, quality standards, organized storage and reliable market information. Poor tapping methods can damage trees, reduce future yield and weaken long-term income. Lack of clean handling and classification can also reduce the value of the product.',
      'By starting with education and organization, the program helps protect the tree base while improving the economic value of gum arabic for families.'
    ],
    
    objectivesAr: [
      'تدريب المنتجين على الجمع المستدام للصمغ العربي دون إتلاف الأشجار.',
      'تحسين النظافة والفرز والتجفيف والتخزين.',
      'حصر أشجار الصمغ العربي والطاقة الإنتاجية لكل أسرة.',
      'إعداد المنتجين للتسويق الجماعي والتسعير حسب الجودة.',
      'رفع الوعي بالقيمة البيئية والاقتصادية لأشجار الصمغ العربي.',
      'بناء قاعدة بيانات موثوقة لجذب الدعم والشراكات المستقبلية.'
    ],
    objectivesEn: [
      'Train producers on sustainable gum arabic harvesting and tree-friendly tapping.',
      'Improve product cleanliness, sorting, drying and storage practices.',
      'Map existing gum arabic trees and production capacity by household.',
      'Prepare producers for future cooperative marketing and quality-based pricing.',
      'Increase awareness of the ecological and economic value of gum arabic trees.',
      'Build a reliable data foundation for partner support and future investment.'
    ],
    
    beneficiariesAr: [
      'منتجو الصمغ العربي',
      'الأسر الريفية التي تمتلك أشجار الصمغ العربي',
      'النساء المشاركات في الفرز والتنظيف والتخزين',
      'الشباب القادرون على المساعدة في الحصر والمتابعة الميدانية',
      'مجموعات المنتجين واللجان المحلية'
    ],
    beneficiariesEn: [
      'Gum arabic producers',
      'Rural households with gum arabic trees',
      'Women involved in sorting, cleaning and storage',
      'Youth who can support mapping, data collection and field follow-up',
      'Local producer groups and cooperative committees'
    ],
    
    activitiesAr: [
      'تسجيل الأسر والمنتجين',
      'حصر أشجار الصمغ العربي ورسم خريطة ميدانية لها',
      'تدريب عملي على طرق الجمع المستدام',
      'تدريب على التنظيف والتجفيف والفرز والتخزين',
      'التوعية بالتنظيم التعاوني والعمل الجماعي',
      'عروض تطبيقية لتحسين الجودة',
      'جلسات مبسطة عن السوق والأسعار',
      'متابعة موسمية وإعداد تقارير ميدانية'
    ],
    activitiesEn: [
      'Household and producer registration',
      'Gum arabic tree inventory and field mapping',
      'Practical training on sustainable tapping',
      'Training on cleaning, drying, grading and storage',
      'Producer group formation and cooperative awareness',
      'Quality control demonstrations',
      'Basic market literacy sessions',
      'Field monitoring and seasonal reporting'
    ],
    
    trainingModulesAr: [
      'فهم شجرة الصمغ العربي — دورها البيئي وقيمتها الاقتصادية وطرق حمايتها.',
      'طرق الجمع المستدام — كيفية الجمع دون الإضرار بالشجرة.',
      'النظافة والفرز — تقليل الشوائب وتحسين القيمة.',
      'التجفيف والتخزين — حماية جودة المنتج بعد الجمع.',
      'درجات الجودة وفهم السوق — لماذا تؤثر الجودة على السعر.',
      'أساسيات التسويق التعاوني — كيف يقوي التنظيم موقف المنتجين.',
      'متابعة رعاية الأشجار — الصيانة الموسمية والحماية من الرعي والحرائق.'
    ],
    trainingModulesEn: [
      'Understanding the Gum Arabic Tree — ecological role, income potential and protection.',
      'Sustainable Tapping Methods — how to collect without damaging the tree.',
      'Product Cleanliness and Sorting — reducing contamination and improving value.',
      'Drying and Storage Practices — protecting product quality after collection.',
      'Quality Grades and Market Awareness — understanding why quality changes price.',
      'Cooperative Marketing Basics — why organized producers negotiate better.',
      'Tree Care Follow-up — seasonal maintenance and protection from grazing/fire.'
    ],
    
    implementationPathwayAr: [
      'لقاء تعريفي في القرية',
      'تسجيل المنتجين وحصر الأشجار',
      'تقييم خط الأساس للإنتاج',
      'تدريب عملي على الجمع',
      'دورة أولى لتحسين الجودة',
      'متابعة موسم الجمع',
      'مراجعة مجموعة المنتجين وإعداد التقرير'
    ],
    implementationPathwayEn: [
      'Village awareness meeting',
      'Producer registration and tree mapping',
      'Baseline production assessment',
      'Practical harvesting training',
      'First quality improvement cycle',
      'Seasonal collection monitoring',
      'Producer group review and reporting'
    ],
    
    expectedOutcomesAr: [
      'فهم المنتجين لطرق الجمع المستدام.',
      'تقليل الضرر الناتج عن طرق الجمع الخاطئة.',
      'تحسين نظافة المنتج وطريقة تخزينه.',
      'توفر بيانات المنتجين والأشجار.',
      'زيادة وعي الأسر بالسوق والجودة.',
      'تجهيز القرية للتنظيم التعاوني مستقبلاً.'
    ],
    expectedOutcomesEn: [
      'Producers understand sustainable gum arabic harvesting.',
      'Tree damage caused by poor tapping is reduced.',
      'Product cleanliness and storage quality improve.',
      'Producer records and tree data become available.',
      'Families gain stronger market awareness.',
      'The village becomes better prepared for cooperative organization.'
    ],
    
    measurableIndicatorsAr: [
      'عدد منتجي الصمغ العربي المسجلين',
      'عدد الأشجار التي تم حصرها',
      'عدد المنتجين الذين تلقوا التدريب',
      'عدد النساء المشاركات في الفرز والتنظيف',
      'عدد جلسات تحسين الجودة',
      'كمية المنتج المصنفة حسب الجودة',
      'عدد الزيارات الميدانية الموسمية'
    ],
    measurableIndicatorsEn: [
      'Number of registered gum arabic producers',
      'Number of trees mapped',
      'Number of producers trained',
      'Number of women participating in sorting/cleaning activities',
      'Number of quality improvement sessions completed',
      'Volume of product classified by quality category',
      'Number of seasonal field follow-up visits'
    ],
    
    safeguardsAr: [
      'التسجيل لا يعني وعداً تلقائياً بالدعم المالي.',
      'تُستخدم البيانات لأغراض التخطيط وتقييم الاحتياجات.',
      'لا تُنشر الوثائق الشخصية للعامة.',
      'التدريب يستهدف المنتجين المؤهلين وفق معايير مجتمعية واضحة.',
      'أي نشاط تسويقي مستقبلي يجب أن يحمي حقوق المنتجين والشفافية المحلية.'
    ],
    safeguardsEn: [
      'Registration does not create an automatic financial promise.',
      'Product and household data are used for planning and support assessment.',
      'Identity documents are not shared publicly.',
      'Training is open to eligible producers according to community criteria.',
      'Future market activities must protect producer rights and local transparency.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم مواد التدريب، المدربين الميدانيين، أدوات حصر الأشجار، معدات التخزين، أكياس الجمع النظيفة، شهادات المنتجين، بناء قدرات التعاونيات، ومتابعة الجودة الموسمية.',
    partnerOpportunitiesEn: 'Partners can support training materials, field trainers, tree mapping tools, storage equipment, clean collection bags, producer certification, cooperative capacity building and seasonal quality monitoring.'
  },
  {
    id: 'prog-002',
    slug: 'tree-care-reforestation',
    heroImage: '/nile3.webp',
    primaryFocusAr: 'حماية الأشجار والبيئة',
    primaryFocusEn: 'Tree Protection & Environment',
    targetGroupAr: 'المجتمع المحلي',
    targetGroupEn: 'Local Community',
    expectedImpactAr: 'زيادة الغطاء الشجري',
    expectedImpactEn: 'Increase Tree Cover',
    
    categoryAr: 'البيئة وحزام الصمغ العربي',
    categoryEn: 'Environment & Gum Arabic Belt',
    titleAr: 'برنامج رعاية الأشجار وإعادة التشجير',
    titleEn: 'Tree Care & Reforestation Program',
    shortSummaryAr: 'حماية أشجار الصمغ العربي القائمة، زيادة الشتول، استعادة المناطق المتدهورة، وبناء ممارسات مجتمعية لرعاية الأشجار.',
    shortSummaryEn: 'Protecting existing gum arabic trees, increasing seedlings, restoring degraded areas and building community-based tree care practices.',
    
    briefAr: [
      'يحمي برنامج رعاية الأشجار وإعادة التشجير الأساس الطبيعي للاقتصاد الريفي في ولاية النيل الأبيض. فإنتاج الصمغ العربي يعتمد على صحة الأشجار، بينما قد تتعرض الأشجار للضعف بسبب الجفاف، الرعي غير المنظم، الحرائق، طرق الجمع الخاطئة، وعدم وجود زراعة بديلة كافية.',
      'يساعد البرنامج المجتمع المحلي على رعاية الأشجار القائمة وزيادة الغطاء الشجري تدريجياً من خلال الشتول والمشاتل وأنظمة الحماية المحلية.'
    ],
    briefEn: [
      'The Tree Care & Reforestation Program protects the natural foundation of the White Nile rural economy. Gum arabic production depends on healthy trees, but trees can be weakened by drought, uncontrolled grazing, fire, poor tapping and lack of replacement planting. This program supports the community to care for existing trees and gradually expand tree cover through seedlings, nurseries and local protection systems.'
    ],
    
    whyItMattersAr: [
      'لا يمكن لأي مشروع للصمغ العربي أن يكون مستداماً إذا لم تتم حماية الأشجار. تعتمد كثير من الأسر الريفية على الموارد الطبيعية، لكن الفقر وضعف المعرفة قد يدفعان إلى ممارسات قصيرة الأجل تقلل الإنتاجية المستقبلية. لذلك فإن رعاية الأشجار هي نشاط بيئي واستراتيجية لحماية دخل الأسر في نفس الوقت.'
    ],
    whyItMattersEn: [
      'A gum arabic project cannot be sustainable if the trees are not protected. Many rural families depend on natural resources, but poverty and lack of training can lead to short-term practices that reduce long-term productivity. Tree care is therefore both an environmental activity and an income protection strategy.'
    ],
    
    objectivesAr: [
      'حماية أشجار الصمغ العربي القائمة من التلف.',
      'زيادة عدد الشتول والأشجار البديلة.',
      'تدريب الأسر على الرعاية والتقليم والحماية والمتابعة الموسمية.',
      'تقليل الخسائر الناتجة عن الرعي والحرائق والجمع الخاطئ.',
      'تعزيز المسؤولية البيئية على مستوى القرية.',
      'بناء قاعدة إنتاج مستقبلية للصمغ العربي.'
    ],
    objectivesEn: [
      'Protect existing gum arabic trees from damage.',
      'Increase the number of young seedlings and replacement trees.',
      'Train families on tree care, pruning, protection and seasonal follow-up.',
      'Reduce losses from grazing, fire and poor harvesting.',
      'Promote village-level environmental responsibility.',
      'Build a future supply base for gum arabic production.'
    ],
    
    beneficiariesAr: [
      'الأسر المنتجة للصمغ العربي',
      'مجموعات الشباب المشاركة في حملات الزراعة',
      'النساء المشاركات في المشاتل أو رعاية الشتول',
      'اللجان المحلية المسؤولة عن حماية الأشجار',
      'المزارعون الذين لديهم أراضٍ مناسبة لزيادة الأشجار'
    ],
    beneficiariesEn: [
      'Gum arabic producing households',
      'Youth groups supporting planting campaigns',
      'Women involved in nursery or seedling care activities',
      'Local committees responsible for tree protection',
      'Farmers with land suitable for tree expansion'
    ],
    
    activitiesAr: [
      'حصر الأشجار وتقييم حالتها الصحية',
      'تخطيط مشتل أو مصدر شتول',
      'توزيع الشتول وحملات الزراعة',
      'إنشاء مواقع تطبيقية لرعاية الأشجار',
      'وضع قواعد مجتمعية للحماية من الرعي والحرائق',
      'تدريب على التقليم والصيانة الموسمية',
      'إشراك الشباب في متابعة الأشجار',
      'إعداد تقرير سنوي عن نسبة بقاء الشتول'
    ],
    activitiesEn: [
      'Tree inventory and health assessment',
      'Seedling nursery planning',
      'Seedling distribution and planting campaigns',
      'Demonstration plots for tree care',
      'Community rules for grazing and fire protection',
      'Training on pruning and seasonal maintenance',
      'Youth volunteer tree monitoring',
      'Annual survival rate reporting'
    ],
    
    trainingModulesAr: [
      'أهمية الأشجار — الدخل والظل وحماية التربة والقدرة على التكيف.',
      'تجهيز الشتول — أساسيات المشاتل والتعامل مع الأشجار الصغيرة.',
      'طرق الزراعة — المسافات والتوقيت والحماية.',
      'صيانة الأشجار — الري والتقليم والرعاية المبكرة.',
      'الحماية من الرعي والحرائق — أنظمة الوقاية المحلية.',
      'متابعة صحة الأشجار — اكتشاف الأشجار الضعيفة أو المتضررة.',
      'سجلات الأشجار المجتمعية — متابعة البقاء والنمو.'
    ],
    trainingModulesEn: [
      'Why Trees Matter — income, shade, soil protection and climate resilience.',
      'Seedling Preparation — nursery basics and handling young trees.',
      'Planting Techniques — spacing, timing and protection.',
      'Tree Maintenance — watering, pruning and early care.',
      'Protection from Grazing and Fire — local prevention systems.',
      'Tree Health Monitoring — identifying weak or damaged trees.',
      'Community Tree Records — tracking survival and growth.'
    ],
    
    implementationPathwayAr: [
      'مسح خط أساس للأشجار',
      'خطة المشاتل والشتول',
      'تدريب المجتمع',
      'حملة الزراعة',
      'إجراءات الحماية',
      'متابعة نسبة البقاء',
      'تقرير سنوي لإعادة التشجير'
    ],
    implementationPathwayEn: [
      'Tree baseline survey',
      'Nursery and seedling plan',
      'Community training',
      'Planting campaign',
      'Protection measures',
      'Survival monitoring',
      'Annual reforestation report'
    ],
    
    expectedOutcomesAr: [
      'حماية ومتابعة عدد أكبر من الأشجار.',
      'زراعة شتول جديدة في مواقع مناسبة.',
      'فهم الأسر لأهمية الرعاية طويلة الأجل.',
      'مشاركة الشباب والنساء في العمل البيئي.',
      'تحسين سجلات الأشجار ونسبة بقائها.'
    ],
    expectedOutcomesEn: [
      'More trees are protected and monitored.',
      'New seedlings are planted in suitable locations.',
      'Families understand long-term tree care.',
      'Youth and women participate in environmental action.',
      'Tree survival and village-level records improve.'
    ],
    
    measurableIndicatorsAr: [
      'عدد الأشجار التي تم حصرها',
      'عدد الشتول الموزعة',
      'عدد الشتول المزروعة',
      'نسبة بقاء الشتول بعد 6 و12 شهراً',
      'عدد المشاركين في التدريب',
      'عدد الزيارات الميدانية للمتابعة',
      'عدد إجراءات الحماية من الرعي أو الحرائق'
    ],
    measurableIndicatorsEn: [
      'Number of trees mapped',
      'Number of seedlings distributed',
      'Number of seedlings planted',
      'Seedling survival rate after 6 and 12 months',
      'Number of training participants',
      'Number of community monitoring visits',
      'Number of fire/grazing protection measures introduced'
    ],
    
    safeguardsAr: [
      'أهداف الزراعة يجب أن تكون واقعية ومبنية على توفر الأرض والمياه.',
      'الشتول يجب أن تُحمى بعد التوزيع.',
      'اللجان المحلية تتحقق من مواقع الزراعة.',
      'الأنشطة البيئية يجب ألا تخلق نزاعات حول الأرض.',
      'يتم تسجيل البيانات بشفافية.'
    ],
    safeguardsEn: [
      'Planting targets must be realistic and based on water/land conditions.',
      'Seedlings must be protected after distribution.',
      'Community committees should verify planting locations.',
      'Environmental activities should not create land disputes.',
      'Data should be recorded transparently.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم المشاتل، إنتاج الشتول، أدوات الري، حمايات الأشجار، مواد التدريب، فرق متابعة الشباب، النقل الميداني، وتقييم نسبة البقاء السنوي.',
    partnerOpportunitiesEn: 'Partners can support nurseries, seedling production, water containers, tree guards, training materials, youth monitoring teams, field transport and annual survival assessments.'
  },
  {
    id: 'prog-003',
    slug: 'agriculture-support',
    heroImage: '/nile5.webp',
    primaryFocusAr: 'تجارب إنتاج زراعي محدودة',
    primaryFocusEn: 'Trial Crop Demonstration',
    targetGroupAr: 'صغار المزارعين',
    targetGroupEn: 'Smallholder Farmers',
    expectedImpactAr: 'تحسين الأمن الغذائي والدخل',
    expectedImpactEn: 'Improve Food Security & Income',
    
    categoryAr: 'الأمن الغذائي والدخل الريفي',
    categoryEn: 'Food Security & Rural Income',
    titleAr: 'برنامج دعم الزراعة',
    titleEn: 'Agriculture Support Program',
    shortSummaryAr: 'إلى جانب الصمغ العربي، يمكن اختبار بعض المحاصيل مثل الطماطم، الخضروات، محاصيل الأعلاف، والعنب من خلال مساحات تجريبية صغيرة، وذلك بعد فحص التربة، توفر المياه، جودة المياه، ملاءمة المناخ، وقدرة الأسر على المتابعة.',
    shortSummaryEn: 'In addition to gum arabic, selected crops such as tomato, vegetables, fodder crops and grapes may be tested through small demonstration plots, depending on soil analysis, water availability, water quality, climate suitability and household capacity.',
    
    briefAr: [
      'إلى جانب الصمغ العربي، يمكن اختبار بعض المحاصيل مثل الطماطم، الخضروات، محاصيل الأعلاف، والعنب من خلال مساحات تجريبية صغيرة، وذلك بعد فحص التربة، توفر المياه، جودة المياه، ملاءمة المناخ، وقدرة الأسر على المتابعة. ولا يتم تقديم هذه المحاصيل كأهداف إنتاج مؤكدة، بل كخيارات تجريبية لمعرفة ما يمكن أن ينجح واقعياً في البيئة المحلية.',
      'تمت الإشارة محلياً إلى توفر المياه، وسيتم التحقق من ذلك خلال التقييم الميداني. كما يمكن دراسة زراعة العنب كمساحة تجريبية صغيرة بعد التحقق من ملاءمة التربة والمياه والمناخ.'
    ],
    briefEn: [
      'In addition to gum arabic, selected crops such as tomato, vegetables, fodder crops and grapes may be tested through small demonstration plots, depending on soil analysis, water availability, water quality, climate suitability and household capacity. These crops are not presented as guaranteed production targets, but as trial options to identify what can work realistically in the local environment.',
      'Local water access has been reported and will be verified during field assessment. Grape cultivation may be evaluated as a small experimental plot after soil, water and climate suitability checks.'
    ],
    
    whyItMattersAr: [
      'لا تستطيع الأسر الريفية الاعتماد على مصدر دخل موسمي واحد فقط. عندما تكون الزراعة ضعيفة، تصبح الأسر أكثر تعرضاً لصدمات السوق ونقص الغذاء ومشاكل تغذية المواشي. تحسين إنتاج الخضروات والأعلاف يمكن أن يدعم تغذية الأسرة، ويخفف ضغط الأعلاف، ويوفر دخلاً نقدياً بسيطاً.'
    ],
    whyItMattersEn: [
      'Rural families cannot depend on one seasonal income source only. When agriculture is weak, families become more vulnerable to market shocks, food shortages and livestock feed problems. Improving vegetable and fodder production can support household nutrition, livestock feeding and small cash income.'
    ],
    
    objectivesAr: [
      'تحسين المعرفة الزراعية الأساسية من خلال تجارب الإنتاج الزراعي المحدودة.',
      'اختبار ملاءمة محاصيل الطماطم، الخضروات، والأعلاف في مساحات صغيرة.',
      'إنشاء حقول إرشادية للتعلم العملي للمجتمع المحلي.',
      'دراسة زراعة العنب كمساحة تجريبية صغيرة بعد التحقق من الملاءمة.',
      'التحقق من توفر المياه المشار إليه محلياً خلال التقييم الميداني.',
      'ربط نتائج التجارب بأعلاف المواشي وسبل عيش الصمغ العربي.'
    ],
    objectivesEn: [
      'Improve basic agricultural knowledge through trial crop demonstrations.',
      'Test tomato, vegetable, and fodder crop suitability via small plots.',
      'Introduce demonstration plots for practical community learning.',
      'Evaluate grape cultivation as a small experimental plot after suitability checks.',
      'Verify reported water access during field assessment.',
      'Connect trial results with livestock fodder and gum arabic livelihoods.'
    ],
    
    beneficiariesAr: [
      'صغار المزارعين',
      'الأسر الريفية التي تمتلك أرضاً قابلة للزراعة',
      'النساء المشاركات في إنتاج الغذاء الأسري',
      'الشباب المهتمون بالعمل الزراعي',
      'مربو المواشي الذين يحتاجون إلى الأعلاف',
      'المدربون المحليون والمتطوعون الزراعيون'
    ],
    beneficiariesEn: [
      'Smallholder farmers',
      'Rural families with cultivable land',
      'Women involved in household food production',
      'Youth interested in agricultural work',
      'Livestock owners needing fodder crops',
      'Field trainers and local agriculture volunteers'
    ],
    
    activitiesAr: [
      'حصر القدرة الزراعية والموارد المتاحة لكل أسرة',
      'إنشاء حقول إرشادية لتجارب الطماطم والخضروات',
      'تخطيط مساحات تجريبية للأعلاف لدعم المواشي',
      'تخطيط مساحة تجريبية صغيرة لزراعة العنب وفحص الملاءمة',
      'التحقق الميداني من توفر المياه المشار إليه محلياً',
      'تحليل التربة والمياه لاختيار المحاصيل التجريبية المناسبة',
      'إرشاد حول كفاءة استخدام المياه والري البسيط',
      'متابعة ورفع تقارير عن إنتاجية المحاصيل التجريبية'
    ],
    activitiesEn: [
      'Household agricultural capacity and resource mapping',
      'Demonstration plot setup for tomato and vegetable trials',
      'Fodder crop trial planning to support livestock',
      'Experimental plot planning for grape cultivation suitability',
      'Field verification of reported local water access',
      'Soil and water quality analysis for trial crop selection',
      'Water-use and basic irrigation efficiency guidance',
      'Monitoring and reporting yield performance of trial crops'
    ],
    
    trainingModulesAr: [
      'الإمكانات الزراعية المحلية — ما الذي يمكن زراعته وتحت أي ظروف.',
      'أساسيات الطماطم والخضروات — البذور والمشتل والنقل والرعاية.',
      'تخطيط محاصيل الأعلاف — ربط الزراعة باحتياجات المواشي.',
      'تجهيز التربة — طرق بسيطة لتحسين الإنتاجية.',
      'إدارة المياه — الاستخدام الكفؤ للموارد المائية المحدودة.',
      'الآفات والأمراض — الاكتشاف المبكر والوقاية.',
      'الحصاد والتسويق الأسري — الاستهلاك وبيع الفائض.'
    ],
    trainingModulesEn: [
      'Local Agricultural Potential — what can grow and under which conditions.',
      'Tomato and Vegetable Basics — seed, nursery, transplanting and care.',
      'Fodder Crop Planning — linking crops to livestock needs.',
      'Soil Preparation — simple techniques for better productivity.',
      'Water Management — efficient use of limited water resources.',
      'Pest and Disease Awareness — early identification and prevention.',
      'Harvest and Household Marketing — using and selling surplus production.'
    ],
    
    implementationPathwayAr: [
      'تقييم الأرض والمياه لكل أسرة',
      'اختيار أسر تجريبية أو حقل إرشادي',
      'جلسات تدريب عملية',
      'إعداد تقويم الزراعة والبذور',
      'تنفيذ الدورة التجريبية الأولى',
      'متابعة ميدانية ومراجعة التعلم',
      'التوسع إلى أسر إضافية'
    ],
    implementationPathwayEn: [
      'Household land and water assessment',
      'Selection of pilot families or demonstration area',
      'Practical training sessions',
      'Seed and planting calendar preparation',
      'First demonstration cycle',
      'Field follow-up and learning review',
      'Expansion to additional households'
    ],
    
    expectedOutcomesAr: [
      'اكتساب الأسر معرفة زراعية عملية.',
      'تحسن إنتاج الخضروات والأعلاف.',
      'تعزيز الأمن الغذائي الأسري.',
      'تخفيف ضغط الأعلاف على مربي المواشي.',
      'إشراك النساء والشباب في أدوار إنتاجية.',
      'استخدام نتائج الحقول الإرشادية لتوجيه الدعم المستقبلي.'
    ],
    expectedOutcomesEn: [
      'Families gain practical agricultural knowledge.',
      'Vegetable and fodder crop production improves.',
      'Household food security becomes stronger.',
      'Livestock feed pressure is reduced through fodder planning.',
      'Youth and women gain productive roles.',
      'Demonstration results guide future support.'
    ],
    
    measurableIndicatorsAr: [
      'عدد الأسر التي تم إعداد ملف زراعي لها',
      'عدد المزارعين المدربين',
      'عدد الحقول الإرشادية',
      'المساحة المزروعة بالخضروات أو الأعلاف',
      'عدد النساء والشباب المشاركين',
      'تقديرات الإنتاج من الحقول التجريبية',
      'عدد زيارات المتابعة الميدانية'
    ],
    measurableIndicatorsEn: [
      'Number of households with agricultural profiles',
      'Number of farmers trained',
      'Number of demonstration plots established',
      'Area planted with vegetable or fodder crops',
      'Number of women/youth participants',
      'Yield estimates from pilot plots',
      'Number of follow-up visits completed'
    ],
    
    safeguardsAr: [
      'الدعم الزراعي يجب أن يناسب التربة والمياه والمناخ المحلي.',
      'لا يجب الوعد بالمدخلات قبل تأكيد دعم الشركاء.',
      'الحقول الإرشادية للتعلم وليست للمحاباة.',
      'يجب تقييم توفر المياه قبل التوسع.',
      'بيانات الحقول التجريبية توجه التوسع المستقبلي.'
    ],
    safeguardsEn: [
      'Agricultural support must match local soil, water and climate conditions.',
      'The program must avoid promising inputs before partner funding is confirmed.',
      'Demonstration plots should be used for learning, not favoritism.',
      'Water availability must be assessed before expansion.',
      'Data from pilot plots should guide future scaling.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم البذور، صواني المشاتل، الأدوات البسيطة، الحقول الإرشادية، التدريب على استخدام المياه، الزيارات الإرشادية، مواد التوعية بالآفات، والمدربين الزراعيين المحليين.',
    partnerOpportunitiesEn: 'Partners can support seeds, nursery trays, basic tools, demonstration plots, water-use training, field extension visits, pest awareness materials and community agriculture trainers.'
  },
  {
    id: 'prog-004',
    slug: 'livestock-support',
    heroImage: '/nile8.webp',
    primaryFocusAr: 'الأبقار والأغنام والماعز',
    primaryFocusEn: 'Cattle, Sheep & Goats',
    targetGroupAr: 'مربو المواشي',
    targetGroupEn: 'Livestock Owners',
    expectedImpactAr: 'تحسين صحة الحيوان والإنتاجية',
    expectedImpactEn: 'Improve Animal Health & Yield',
    
    categoryAr: 'صحة الحيوان وصمود الأسرة',
    categoryEn: 'Animal Health & Household Resilience',
    titleAr: 'برنامج دعم الثروة الحيوانية',
    titleEn: 'Livestock Support Program',
    shortSummaryAr: 'تحسين تربية الأبقار والأغنام والماعز من خلال التوعية الصحية الأساسية، تخطيط الأعلاف، تنسيق التطعيمات، حفظ السجلات، وإدارة الثروة الحيوانية على مستوى الأسرة.',
    shortSummaryEn: 'Improving cattle, sheep and goat husbandry through basic animal health awareness, feed planning, vaccination coordination, record keeping and family-level livestock management.',
    
    briefAr: [
      'تمثل الثروة الحيوانية جزءاً أساسياً من بقاء الأسرة الريفية وثروتها في مجتمعات النيل الأبيض. تعتمد كثير من الأسر على الحيوانات للحصول على اللبن واللحم والادخار والدخل في حالات الطوارئ. لكن إنتاجية المواشي قد تتأثر بنقص الأعلاف، مخاطر الأمراض، ضعف الوصول إلى الخدمات البيطرية، ضعف السجلات، وعدم التنظيم السوقي.',
      'يمكن دراسة إنشاء نقطة صغيرة مشتركة على مستوى القرية لتجميع الحليب والمعالجة الأولية البسيطة (وحدة ألبان صغيرة مشتركة)، وليس كمصنع كبير. وتهدف هذه الوحدة إلى تحسين النظافة، والتبريد البسيط، وإنتاج بعض المنتجات المحلية مثل اللبن أو الجبن أو الزبدة حسب الإمكانيات، مع دعم مشاركة النساء والشباب وتحسين دخل الأسر والتغذية المحلية.'
    ],
    briefEn: [
      'Livestock is a core part of household survival and rural wealth in White Nile communities. Many families depend on animals for milk, meat, savings, mobility and emergency income. However, livestock productivity can be weakened by feed shortages, disease risks, lack of veterinary access, poor record keeping and weak market organization.',
      'A village-level shared milk collection and basic dairy processing point (Small Shared Dairy Unit) may be developed as a support module. It is not intended as a large dairy factory, but as a practical facility to improve hygiene, simple cooling, local dairy products, women’s participation, nutrition and family income.'
    ],
    
    whyItMattersAr: [
      'بالنسبة للأسر الريفية الفقيرة، فقدان الحيوانات قد يعني فقدان الادخار والتغذية والقدرة على الصمود. يمكن للتخطيط الأفضل للأعلاف، والتوعية بصحة الحيوان، والتنسيق المحلي أن يقلل من الخسائر الممكن تجنبها. كما يرتبط دعم المواشي مباشرة بالزراعة، لأن إنتاج الأعلاف يمكن أن يخفف ضغط التغذية.'
    ],
    whyItMattersEn: [
      'For poor rural families, losing animals can mean losing savings, nutrition and resilience. Better feed planning, animal health awareness and local coordination can reduce preventable losses. Livestock support also connects directly to agriculture, because fodder crop production can reduce feed pressure.'
    ],
    
    objectivesAr: [
      'حصر أصول الثروة الحيوانية واحتياجات الأسر.',
      'تدريب الأسر على الصحة الحيوانية الأساسية والتربية السليمة.',
      'تحسين تخطيط الأعلاف والتوعية بمحاصيل العلف.',
      'تنسيق الزيارات البيطرية وحملات التطعيم مستقبلاً حيثما أمكن.',
      'تشجيع حفظ سجلات المواشي على مستوى الأسرة.',
      'دعم وحدة ألبان صغيرة مشتركة لتحسين النظافة المحلية ودخل النساء.'
    ],
    objectivesEn: [
      'Map household livestock assets and needs.',
      'Train families on basic animal health and husbandry.',
      'Improve feed planning and fodder crop awareness.',
      'Coordinate future veterinary visits and vaccination campaigns where possible.',
      'Promote livestock record keeping at household level.',
      'Support a small shared dairy unit to enhance local hygiene and women\'s income.'
    ],
    
    beneficiariesAr: [
      'أصحاب الأبقار',
      'أصحاب الأغنام والماعز',
      'النساء المشاركات في الرعاية اليومية للحيوانات',
      'الشباب والرعاة ومساعدو الثروة الحيوانية',
      'الأسر التي تواجه مشاكل نقص الأعلاف',
      'المتطوعون أو المساعدون المحليون في صحة الحيوان'
    ],
    beneficiariesEn: [
      'Cattle owners',
      'Sheep and goat owners',
      'Women involved in daily animal care',
      'Youth herders and livestock helpers',
      'Families with feed shortage challenges',
      'Local animal health volunteers or field assistants'
    ],
    
    activitiesAr: [
      'حصر المواشي حسب الأسرة',
      'تقييم احتياجات الأعلاف والمياه',
      'تدريب أساسي على التربية والرعاية',
      'جلسات توعية بالأمراض الحيوانية',
      'تحديد مسارات الإحالة البيطرية',
      'ربط التخطيط العلفي ببرنامج الزراعة',
      'دراسة وتخطيط إنشاء وحدة ألبان صغيرة مشتركة',
      'تقارير موسمية عن حالة الثروة الحيوانية'
    ],
    activitiesEn: [
      'Livestock census by household',
      'Feed and water needs assessment',
      'Basic husbandry training',
      'Animal disease awareness sessions',
      'Veterinary referral mapping',
      'Fodder crop planning with agriculture program',
      'Explore feasibility and planning for a small shared dairy unit',
      'Seasonal animal health reporting'
    ],
    
    trainingModulesAr: [
      'المواشي كأصول للأسرة — حماية الحيوانات كجزء من الادخار.',
      'الصحة الحيوانية الأساسية — التعرف على علامات الإنذار المبكر.',
      'تخطيط التغذية والمياه — تقليل الإجهاد وفقدان الإنتاجية.',
      'محاصيل الأعلاف وتخزينها — ربط الزراعة بالثروة الحيوانية.',
      'وحدة ألبان صغيرة مشتركة — النظافة، التبريد البسيط، والمنتجات المحلية الأساسية.',
      'التطعيم والتنسيق البيطري — متى وكيف نطلب الدعم.',
      'سجلات المواشي — متابعة الأعداد والولادات والنفوق والعلاجات.'
    ],
    trainingModulesEn: [
      'Livestock as Household Assets — protecting animals as family savings.',
      'Basic Animal Health — recognizing early warning signs.',
      'Feeding and Water Planning — reducing stress and productivity loss.',
      'Fodder Crops and Feed Storage — linking agriculture to livestock.',
      'Small Shared Dairy Unit — hygiene, cooling, and basic dairy products.',
      'Vaccination and Veterinary Coordination — when and how to seek support.',
      'Household Livestock Records — tracking numbers, births, deaths and treatments.'
    ],
    
    implementationPathwayAr: [
      'تسجيل الثروة الحيوانية للأسر',
      'تقييم مخاطر الأعلاف والأمراض',
      'جلسات تدريب أساسية',
      'ربط تخطيط الأعلاف ببرنامج الزراعة',
      'تنسيق بيطري محلي',
      'زيارات متابعة وسجلات',
      'تقرير موسمي عن حالة المواشي'
    ],
    implementationPathwayEn: [
      'Household livestock registration',
      'Feed and disease risk assessment',
      'Basic training sessions',
      'Fodder planning link with agriculture program',
      'Local veterinary coordination',
      'Follow-up visits and records',
      'Seasonal livestock status report'
    ],
    
    expectedOutcomesAr: [
      'توفر بيانات الثروة الحيوانية للتخطيط.',
      'تحسين ممارسات الرعاية الأساسية لدى الأسر.',
      'فهم أفضل لمخاطر نقص الأعلاف.',
      'تقليل بعض الخسائر المرضية الممكن تجنبها.',
      'ربط برامج الزراعة والثروة الحيوانية.',
      'تحسين التغذية والتجهيز المحلي عبر وحدة ألبان صغيرة مشتركة.'
    ],
    expectedOutcomesEn: [
      'Livestock data becomes available for planning.',
      'Families improve basic animal care practices.',
      'Feed shortage risks are better understood.',
      'Preventable disease losses may be reduced.',
      'Agriculture and livestock programs become connected.',
      'A village-level small shared dairy unit improves nutrition and local processing.'
    ],
    
    measurableIndicatorsAr: [
      'عدد الأسر التي لديها ملف للثروة الحيوانية',
      'عدد الأبقار والأغنام والماعز المسجلة',
      'عدد أصحاب المواشي المدربين',
      'عدد النساء والشباب المشاركين',
      'عدد الأسر التي تستخدم سجلات مواشي بسيطة',
      'عدد الإحالات أو الحملات البيطرية المنسقة',
      'عدد جلسات تخطيط الأعلاف'
    ],
    measurableIndicatorsEn: [
      'Number of households with livestock profiles',
      'Number of cattle, sheep and goats recorded',
      'Number of livestock owners trained',
      'Number of women/youth participants',
      'Number of households using basic livestock records',
      'Number of veterinary referral cases or campaigns coordinated',
      'Number of fodder planning sessions completed'
    ],
    
    safeguardsAr: [
      'البرنامج لا يحل محل الخدمات البيطرية المرخصة.',
      'العلاج الطبي يجب أن يتم بواسطة مختصين مؤهلين.',
      'بيانات المواشي تُحمى وتُستخدم بمسؤولية.',
      'فرص الدعم تعتمد على التقييم وتوفر الشركاء.',
      'التدريب يحترم المعرفة والممارسات المحلية.'
    ],
    safeguardsEn: [
      'The program does not replace licensed veterinary services.',
      'Medical treatment must be handled by qualified professionals.',
      'Livestock data must be protected and used responsibly.',
      'Support opportunities depend on assessment and available partners.',
      'Training must respect local livestock knowledge and practices.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم أيام التوعية البيطرية، تنسيق التطعيمات، أدوات تخطيط الأعلاف، بطاقات سجلات المواشي، عروض المياه والأعلاف، تدريب مساعدي صحة الحيوان، والمتابعة الميدانية.',
    partnerOpportunitiesEn: 'Partners can support veterinary awareness days, vaccination coordination, feed planning tools, livestock record cards, water/feed demonstrations, local animal health training and field monitoring.'
  },
  {
    id: 'prog-005',
    slug: 'women-youth-empowerment',
    heroImage: '/nile4.webp',
    primaryFocusAr: 'إشراك النساء والشباب',
    primaryFocusEn: 'Women & Youth Participation',
    targetGroupAr: 'النساء والشباب',
    targetGroupEn: 'Women & Youth',
    expectedImpactAr: 'تمكين مجتمعي وتدريب عملي',
    expectedImpactEn: 'Community Empowerment & Practical Skills',
    
    categoryAr: 'تنمية ريفية شاملة',
    categoryEn: 'Inclusive Rural Development',
    titleAr: 'برنامج تمكين النساء والشباب',
    titleEn: 'Women & Youth Empowerment Program',
    shortSummaryAr: 'خلق أدوار عملية للنساء والشباب في التدريب، جمع البيانات، رعاية الشتول، الفرز، التعبئة، الزراعة، دعم الثروة الحيوانية، والقيادة المجتمعية.',
    shortSummaryEn: 'Creating practical roles for women and youth in training, data collection, seedling care, sorting, packaging, agriculture, livestock support and community leadership.',
    
    briefAr: [
      'لا يمكن لنموذج تنمية قرى النيل الأبيض أن ينجح إذا تم التعامل مع النساء والشباب كمستفيدين سلبيين فقط. يجب أن يكونوا مشاركين فاعلين في التدريب، الإنتاج، جمع البيانات، رعاية الأشجار، الزراعة، دعم الثروة الحيوانية والتنظيم المحلي. يخلق هذا البرنامج قنوات مشاركة عملية تناسب الواقع المحلي وتبني المهارات تدريجياً.'
    ],
    briefEn: [
      'The White Nile Village Development model cannot succeed if women and youth are treated as passive beneficiaries. They must be active participants in training, production, data collection, tree care, agriculture, livestock support and local organization. This program creates practical participation channels that fit local realities and build skills over time.'
    ],
    
    whyItMattersAr: [
      'تتحمل النساء غالباً مسؤوليات كبيرة في رفاه الأسرة، إعداد الغذاء، رعاية الأطفال، رعاية الحيوانات والإنتاج غير الرسمي. أما الشباب فهم قوة العمل المستقبلية ويمكنهم دعم التسجيل الرقمي والمتابعة الميدانية والممارسات الزراعية الجديدة. استبعادهم يضعف النموذج التنموي بأكمله.'
    ],
    whyItMattersEn: [
      'Women often carry major responsibilities in household welfare, food preparation, child care, animal care and informal production. Youth represent the future labor force and can support digital registration, field monitoring and new agricultural practices. Excluding them weakens the whole development model.'
    ],
    
    objectivesAr: [
      'زيادة مشاركة النساء والشباب في الأنشطة التنموية.',
      'خلق أدوار عملية في الإنتاج والتدريب والتنظيم المحلي.',
      'دعم الشباب كجامعي بيانات ومساعدين في المتابعة الميدانية.',
      'دعم النساء في الفرز ورعاية الشتول والزراعة الأسرية والأنشطة التعاونية.',
      'بناء الثقة والمهارات والقدرة القيادية المحلية.',
      'ضمان مشاركة شاملة في تقارير الأثر الاجتماعي.'
    ],
    objectivesEn: [
      'Increase women and youth participation in development activities.',
      'Create practical roles in production, training and local organization.',
      'Support youth as field data collectors and monitoring assistants.',
      'Support women in sorting, seedling care, household agriculture and cooperative activities.',
      'Build confidence, skills and local leadership capacity.',
      'Ensure inclusive participation in the NGO\'s social impact reporting.'
    ],
    
    beneficiariesAr: [
      'النساء الريفيات',
      'الشباب والشابات',
      'الأسر التي تعولها نساء',
      'الشباب الذين لديهم معرفة أساسية بالقراءة أو استخدام الهاتف',
      'النساء المشاركات في فرز الصمغ أو إنتاج الغذاء أو رعاية الحيوان',
      'أعضاء اللجان المحلية المسؤولون عن الشمول'
    ],
    beneficiariesEn: [
      'Rural women',
      'Young men and women',
      'Female-headed households',
      'Youth with basic literacy or phone skills',
      'Women involved in gum arabic sorting, food production or animal care',
      'Local committee members responsible for inclusion'
    ],
    
    activitiesAr: [
      'حصر النساء والشباب واحتياجاتهم',
      'تقييم المهارات واحتياجات التدريب',
      'تدريب الشباب على جمع البيانات',
      'جلسات لمجموعات الإنتاج النسائية',
      'إشراك النساء والشباب في رعاية الشتول',
      'توعية بالفرز والتنظيف والتعبئة',
      'جلسات مبسطة في الثقافة المالية',
      'متابعة مؤشرات المشاركة في كل البرامج'
    ],
    activitiesEn: [
      'Women and youth registration mapping',
      'Skills and training needs assessment',
      'Youth data collector training',
      'Women\'s production group sessions',
      'Seedling nursery participation',
      'Sorting, cleaning and packaging awareness',
      'Basic financial literacy sessions',
      'Inclusion tracking in all programs'
    ],
    
    trainingModulesAr: [
      'دور النساء والشباب في التنمية الريفية',
      'أساسيات جمع البيانات وأخلاقيات العمل الميداني',
      'فرز الصمغ العربي والتعامل النظيف معه',
      'رعاية الشتول والعمل في المشاتل الصغيرة',
      'الزراعة الأسرية والتغذية',
      'أدوار دعم الثروة الحيوانية',
      'الثقافة المالية البسيطة والادخار الجماعي',
      'القيادة المحلية والمشاركة'
    ],
    trainingModulesEn: [
      'Role of Women and Youth in Rural Development',
      'Basic Data Collection and Field Ethics',
      'Gum Arabic Sorting and Clean Handling',
      'Seedling Care and Small Nursery Work',
      'Household Agriculture and Nutrition',
      'Livestock Support Roles',
      'Basic Financial Literacy and Group Savings Awareness',
      'Local Leadership and Participation'
    ],
    
    implementationPathwayAr: [
      'حصر خط الأساس للشمول',
      'اختيار مجموعات النساء والشباب',
      'جلسات تدريب عملية',
      'توزيع الأدوار داخل البرامج',
      'مشاركة ميدانية وإرشاد',
      'متابعة مؤشرات المشاركة',
      'اعتراف مجتمعي وشهادات'
    ],
    implementationPathwayEn: [
      'Inclusion baseline mapping',
      'Selection of women/youth groups',
      'Practical training sessions',
      'Assigning roles within programs',
      'Field participation and mentoring',
      'Monitoring participation indicators',
      'Community recognition and certification'
    ],
    
    expectedOutcomesAr: [
      'إدماج النساء والشباب بوضوح في المبادرة.',
      'دعم الشباب لأنشطة البيانات والمتابعة.',
      'حصول النساء على أدوار عملية في سلسلة القيمة والإنتاج الأسري.',
      'تمثيل أفضل في القيادة المحلية.',
      'إدراج النوع والعمر في سجلات التدريب والشهادات.'
    ],
    expectedOutcomesEn: [
      'Women and youth are visibly included in the initiative.',
      'Youth support data and monitoring activities.',
      'Women gain practical roles in value chain and household production.',
      'Local leadership becomes more representative.',
      'Training and certification records include gender and age participation.'
    ],
    
    measurableIndicatorsAr: [
      'عدد النساء المسجلات',
      'عدد الشباب المسجلين',
      'عدد النساء المدربات',
      'عدد الشباب المدربين',
      'عدد الشباب المدربين على جمع البيانات',
      'عدد النساء المشاركات في الشتول أو الفرز أو الزراعة',
      'نسبة النساء والشباب من إجمالي المشاركين'
    ],
    measurableIndicatorsEn: [
      'Number of women registered',
      'Number of youth registered',
      'Number of women trained',
      'Number of youth trained',
      'Number of youth data collectors trained',
      'Number of women involved in seedling/sorting/agriculture activities',
      'Percentage of program participants who are women or youth'
    ],
    
    safeguardsAr: [
      'المشاركة يجب أن تحترم الثقافة المحلية والسلامة.',
      'لا تُنشر البيانات الشخصية للعامة.',
      'الأنشطة يجب ألا تخلق توتراً داخل الأسرة أو المجتمع.',
      'مشاركة النساء يجب أن تكون عملية وكريمة وطوعية.',
      'أدوار الشباب يجب أن تتضمن الإشراف وأخلاقيات البيانات.'
    ],
    safeguardsEn: [
      'Participation must respect local culture and safety.',
      'No public exposure of personal data.',
      'Activities must avoid creating family or community tension.',
      'Women\'s participation should be practical, dignified and voluntary.',
      'Youth roles should include supervision and ethical data practices.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم جلسات تدريب النساء، حقائب العمل الميداني للشباب، أدوات جمع البيانات الرقمية، أدوار المشاتل، الأنشطة الإنتاجية النسائية، مواد الشهادات، وتقارير الشمول.',
    partnerOpportunitiesEn: 'Partners can support women training sessions, youth field kits, digital data collection tools, seedling nursery roles, women-led production activities, certification materials and inclusion reporting.'
  },
  {
    id: 'prog-006',
    slug: 'training-certification',
    heroImage: '/nile6.webp',
    primaryFocusAr: 'التدريب العملي',
    primaryFocusEn: 'Practical Training',
    targetGroupAr: 'جميع المستفيدين',
    targetGroupEn: 'All Beneficiaries',
    expectedImpactAr: 'بناء المهارات والاعتراف الموثق',
    expectedImpactEn: 'Skill Building & Documented Recognition',
    
    categoryAr: 'المعرفة والمهارات والاعتراف',
    categoryEn: 'Knowledge, Skills & Recognition',
    titleAr: 'برنامج التدريب والشهادات المعتمدة',
    titleEn: 'Training & Certification Program',
    shortSummaryAr: 'تقديم تدريب ميداني عملي وشهادات بسيطة للمنتجين والأسر والشباب والنساء واللجان المحلية في مجالات الصمغ العربي والزراعة والثروة الحيوانية وجمع البيانات.',
    shortSummaryEn: 'Delivering practical field training and simple certification for producers, families, youth, women and local committees across gum arabic, agriculture, livestock and data collection.',
    
    briefAr: [
      'التدريب هو أول منتج حقيقي للمنظمة. قبل طلب التمويل الكبير أو بناء المنشآت، تبدأ المبادرة بتحسين المعرفة والسلوك والتنظيم. يخلق برنامج التدريب والشهادات مسارات تعلم منظمة ويمنح المشاركين اعترافاً بإكمالهم لمحاور عملية.'
    ],
    briefEn: [
      'Training is the first real product of the NGO. Before requesting large funding or building facilities, the initiative begins by improving knowledge, behavior and organization. The Training & Certification Program creates structured learning pathways and gives participants recognition for completing practical modules.'
    ],
    
    whyItMattersAr: [
      'تفشل كثير من جهود التنمية لأنها توزع مدخلات دون بناء المهارات. التدريب يخلق الملكية، يقلل الهدر، يحسن الجودة، ويُعد المجتمع لإدارة الدعم المستقبلي بمسؤولية. كما تمنح الشهادة المشاركين شعوراً بالكرامة والاعتراف.'
    ],
    whyItMattersEn: [
      'Many development efforts fail because they distribute inputs without building skills. Training creates ownership, reduces waste, improves quality and prepares communities to manage future support responsibly. Certification also gives participants a sense of dignity and recognition.'
    ],
    
    objectivesAr: [
      'إعداد وحدات تدريبية موحدة لكل البرامج الأساسية.',
      'منح شهادات للمشاركين الذين يكملون الجلسات العملية.',
      'بناء قاعدة محلية من المنتجين والمساعدين الميدانيين المدربين.',
      'متابعة المشاركة حسب الأسرة والنوع والعمر.',
      'ربط نتائج التدريب بالتخطيط للدعم المستقبلي.',
      'تعزيز ثقة الشركاء عبر سجلات تعلم قابلة للقياس.'
    ],
    objectivesEn: [
      'Create standardized training modules for all core programs.',
      'Certify participants who complete practical sessions.',
      'Build a local pool of trained producers and field assistants.',
      'Track training participation by household, gender and age group.',
      'Link training results to future eligibility and support planning.',
      'Improve donor confidence through measurable learning records.'
    ],
    
    beneficiariesAr: [
      'منتجو الصمغ العربي',
      'صغار المزارعين',
      'أصحاب المواشي',
      'النساء والشباب',
      'أعضاء اللجان المحلية',
      'جامعو البيانات الميدانيون',
      'قادة التعاونيات مستقبلاً'
    ],
    beneficiariesEn: [
      'Gum arabic producers',
      'Smallholder farmers',
      'Livestock owners',
      'Women and youth participants',
      'Local committee members',
      'Field data collectors',
      'Future cooperative leaders'
    ],
    
    activitiesAr: [
      'إعداد المناهج التدريبية',
      'تسجيل المشاركين',
      'جلسات ميدانية عملية',
      'متابعة الحضور',
      'إصدار الشهادات',
      'التحقق عبر رقم شهادة أو رمز QR',
      'سجلات وتقارير التدريب',
      'جلسات تنشيطية لاحقة'
    ],
    activitiesEn: [
      'Training curriculum preparation',
      'Participant registration',
      'Practical field sessions',
      'Attendance tracking',
      'Certificate generation',
      'QR or certificate number verification',
      'Training records and reports',
      'Follow-up refresher sessions'
    ],
    
    trainingModulesAr: [
      'إنتاج الصمغ العربي ورعاية الأشجار',
      'الجمع المستدام ومراقبة الجودة',
      'الزراعة والحقول الإرشادية',
      'رعاية المواشي وتخطيط الأعلاف',
      'جمع بيانات الأسر والموافقة',
      'مشاركة النساء والشباب',
      'التوعية التعاونية والتنظيم المحلي',
      'أساسيات الثقافة المالية والسوق'
    ],
    trainingModulesEn: [
      'Gum Arabic Production and Tree Care',
      'Sustainable Harvesting and Quality Control',
      'Agriculture and Demonstration Farming',
      'Livestock Care and Feed Planning',
      'Household Data Collection and Consent',
      'Women and Youth Participation',
      'Cooperative Awareness and Local Organization',
      'Basic Financial and Market Literacy'
    ],
    
    implementationPathwayAr: [
      'تحديد احتياجات التدريب من خلال بيانات التسجيل',
      'إعداد تقويم التدريب',
      'تنفيذ الجلسات العملية',
      'تسجيل الحضور والمشاركة',
      'إصدار الشهادات',
      'التحقق من التطبيق الميداني',
      'إعداد تقرير أثر التدريب'
    ],
    implementationPathwayEn: [
      'Identify training needs through registration data',
      'Prepare training calendar',
      'Conduct practical sessions',
      'Record attendance and participation',
      'Issue certificates',
      'Verify field application',
      'Produce training impact report'
    ],
    
    expectedOutcomesAr: [
      'اكتساب المشاركين معرفة عملية.',
      'إنشاء قاعدة من المنتجين المدربين.',
      'خلق اعتراف ومساءلة من خلال الشهادات.',
      'دعم مقترحات الشركاء بسجلات تدريب واضحة.',
      'تمكين اللجان المحلية من التخطيط بصورة أكثر عدالة.'
    ],
    expectedOutcomesEn: [
      'Participants gain practical knowledge.',
      'A trained producer base is established.',
      'Certificates create recognition and accountability.',
      'Training records support future partner proposals.',
      'Local committees can plan support more fairly.'
    ],
    
    measurableIndicatorsAr: [
      'عدد جلسات التدريب المنفذة',
      'عدد المشاركين المدربين',
      'عدد الشهادات الصادرة',
      'عدد النساء والشباب المدربين',
      'عدد زيارات المتابعة الميدانية',
      'نسبة إكمال كل محور تدريبي',
      'عدد الشهادات التي تم التحقق منها'
    ],
    measurableIndicatorsEn: [
      'Number of training sessions held',
      'Number of participants trained',
      'Number of certificates issued',
      'Number of women/youth trained',
      'Number of field follow-up visits',
      'Completion rate by training module',
      'Number of verified certificates'
    ],
    
    safeguardsAr: [
      'الشهادة تؤكد المشاركة في التدريب ولا تعني ضمان الدعم.',
      'سجلات الحضور والهوية يجب أن تُحمى.',
      'التدريب يجب أن يكون عملياً ومفهوماً ومرتبطاً بالواقع المحلي.',
      'يجب ألا تُفرض رسوم غير عادلة على المشاركين.',
      'معايير الشهادة يجب أن تكون واضحة.'
    ],
    safeguardsEn: [
      'Certificates confirm training participation, not guaranteed aid.',
      'Attendance and identity records must be protected.',
      'Training must be practical, understandable and locally relevant.',
      'Participants should not be charged unfair fees.',
      'Certification criteria should be transparent.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم مواد التدريب، المدربين، تجهيز مواقع التدريب، الشهادات، نظام التحقق، دعم النقل، أدوات العرض العملي، وتقارير أثر التدريب.',
    partnerOpportunitiesEn: 'Partners can support training materials, trainers, venue setup, certificates, QR verification, transport support, demonstration tools and training impact reports.'
  },
  {
    id: 'prog-007',
    slug: 'rural-data-social-impact',
    heroImage: '/nile1.webp',
    primaryFocusAr: 'نظام البيانات الأسرية',
    primaryFocusEn: 'Household Data System',
    targetGroupAr: 'إدارة المنظمة والمجتمع',
    targetGroupEn: 'NGO & Community',
    expectedImpactAr: 'توجيه الدعم وقياس الأثر',
    expectedImpactEn: 'Targeted Support & Measured Impact',
    
    categoryAr: 'تنمية مبنية على الأدلة',
    categoryEn: 'Evidence-Based Development',
    titleAr: 'برنامج البيانات الريفية وقياس الأثر الاجتماعي',
    titleEn: 'Rural Data & Social Impact Program',
    shortSummaryAr: 'بناء نظام آمن لجمع بيانات الأسر بموافقة أصحابها، لفهم الاحتياجات، توجيه الدعم، قياس التقدم، وتقديم تقارير أثر مجهولة الهوية للشركاء.',
    shortSummaryEn: 'Building a secure, consent-based household data system to understand needs, guide support, measure progress and report anonymous impact to partners.',
    
    briefAr: [
      'يُعد برنامج البيانات الريفية وقياس الأثر الاجتماعي طبقة المعرفة داخل المبادرة. قبل تقديم الوعود أو إطلاق أنشطة الدعم، تحتاج المنظمة إلى فهم الوضع الحقيقي للأسر: حجم الأسرة، مصادر الدخل، التعليم، الأرض، أشجار الصمغ العربي، الثروة الحيوانية، الاحتياجات العاجلة، واحتياجات التدريب.',
      'يحوّل هذا البرنامج المعلومات المتفرقة في القرية إلى قاعدة بيانات تنموية محترمة ومحمية ومفيدة.'
    ],
    briefEn: [
      'The Rural Data & Social Impact Program is the intelligence layer of the initiative. Before making promises or launching support activities, the NGO first needs to understand the real situation of families: household size, income sources, education, land, gum arabic trees, livestock, urgent needs and training requirements.',
      'This program turns scattered village information into a respectful, protected and useful development database.'
    ],
    
    whyItMattersAr: [
      'بدون بيانات موثوقة، يصبح الدعم التنموي عاطفياً أو عشوائياً أو غير عادل. أما مع البيانات المنظمة، تستطيع المنظمة تحديد الاحتياجات الحقيقية، ترتيب أولويات التدريب، إعداد مقترحات للشركاء، ورفع تقارير تقدم بشفافية. كما تحمي البيانات المجتمع من الوعود غير الواقعية لأنها تجعل القرارات مبنية على الأدلة.'
    ],
    whyItMattersEn: [
      'Without reliable data, development support becomes emotional, random or unfair. With structured data, the NGO can identify real needs, prioritize training, design partner proposals and report progress transparently. Data also protects the community from unrealistic promises by grounding decisions in evidence.'
    ],
    
    objectivesAr: [
      'تسجيل الأسر والمنتجين باحترام.',
      'جمع بيانات خط أساس عن الدخل والتعليم والأشجار والأرض والمواشي.',
      'حماية الوثائق الشخصية والمعلومات الحساسة.',
      'إنتاج إحصاءات مجهولة الهوية لتقارير الشركاء والمانحين.',
      'متابعة التدريب والشهادات وأنشطة الدعم عبر الزمن.',
      'بناء نظام شفاف لقياس الأثر الاجتماعي.'
    ],
    objectivesEn: [
      'Register households and producers respectfully.',
      'Collect baseline data on income, education, trees, land and livestock.',
      'Protect personal documents and sensitive information.',
      'Produce anonymous statistics for donor and partner reports.',
      'Track training, certification and support activities over time.',
      'Build a transparent social impact reporting system.'
    ],
    
    beneficiariesAr: [
      'الأسر الريفية',
      'جامعو البيانات الميدانيون',
      'إدارة المنظمة',
      'أعضاء اللجنة المحلية',
      'المانحون والمنظمات الشريكة',
      'مدراء البرامج والمدربون'
    ],
    beneficiariesEn: [
      'Rural households',
      'Field data collectors',
      'NGO administrators',
      'Local committee members',
      'Donors and partner organizations',
      'Program managers and trainers'
    ],
    
    activitiesAr: [
      'تصميم استمارة تسجيل الأسر',
      'إجراءات الموافقة والخصوصية',
      'تدريب جامعي البيانات',
      'إعداد قاعدة بيانات رقمية',
      'رفع الوثائق وتخزينها بصورة مقيدة',
      'إعداد تقرير خط الأساس',
      'إنشاء لوحة مؤشرات للأثر',
      'المتابعة والتقييم الدوري'
    ],
    activitiesEn: [
      'Household registration form design',
      'Consent and privacy process',
      'Field data collector training',
      'Digital database setup',
      'Document upload and restricted storage',
      'Baseline reporting',
      'Impact dashboard creation',
      'Periodic monitoring and evaluation'
    ],
    
    trainingModulesAr: [
      'لماذا البيانات مهمة في التنمية الريفية',
      'التسجيل بموافقة الأسرة',
      'الخصوصية وحماية الوثائق',
      'أخلاقيات جمع البيانات الميدانية',
      'استخدام النماذج الرقمية وتقليل الأخطاء',
      'تحليل احتياجات خط الأساس',
      'التقارير المجهولة للمانحين',
      'المتابعة وقياس الأثر'
    ],
    trainingModulesEn: [
      'Why Data Matters in Rural Development',
      'Consent-Based Household Registration',
      'Privacy and Document Protection',
      'Field Data Collection Ethics',
      'Digital Form Use and Error Reduction',
      'Baseline Needs Analysis',
      'Anonymous Reporting for Donors',
      'Monitoring and Impact Measurement'
    ],
    
    implementationPathwayAr: [
      'إعداد استمارة البيانات',
      'تدريب الفريق الميداني',
      'تجربة تسجيل أولية للأسر',
      'مراجعة جودة البيانات',
      'تسجيل كامل للقرية',
      'إعداد تقرير خط الأساس',
      'لوحة متابعة مستمرة'
    ],
    implementationPathwayEn: [
      'Data form preparation',
      'Field team training',
      'Household registration pilot',
      'Data quality review',
      'Full village registration',
      'Baseline report preparation',
      'Ongoing monitoring dashboard'
    ],
    
    expectedOutcomesAr: [
      'توفر قاعدة بيانات موثوقة للأسر.',
      'تحسين دقة وعدالة التخطيط للدعم.',
      'حصول المانحين على إحصاءات شفافة ومجهولة الهوية.',
      'إمكانية متابعة التدريب والدعم عبر الزمن.',
      'بقاء الوثائق الشخصية في نطاق مقيد.',
      'تعزيز ثقة المجتمع من خلال إجراءات شفافة.'
    ],
    expectedOutcomesEn: [
      'The village has a reliable household database.',
      'Support planning becomes more accurate and fair.',
      'Donors see transparent, anonymous statistics.',
      'Training and support can be tracked over time.',
      'Personal documents remain restricted.',
      'Community trust improves through transparent processes.'
    ],
    
    measurableIndicatorsAr: [
      'عدد الأسر المسجلة',
      'نسبة اكتمال البيانات',
      'عدد موافقات استخدام البيانات المسجلة',
      'عدد جامعي البيانات المدربين',
      'عدد تقارير خط الأساس',
      'عدد مؤشرات اللوحة المتاحة',
      'عدد السجلات التي تم تحديثها بعد زيارات المتابعة'
    ],
    measurableIndicatorsEn: [
      'Number of households registered',
      'Data completion rate',
      'Number of consent forms recorded',
      'Number of field collectors trained',
      'Number of baseline reports produced',
      'Number of anonymous dashboard metrics available',
      'Number of records updated after follow-up visits'
    ],
    
    safeguardsAr: [
      'يجب جمع البيانات بموافقة واضحة ومستنيرة.',
      'لا تُعرض الوثائق الشخصية للعامة أبداً.',
      'تقارير المانحين تستخدم إحصاءات مجمعة ومجهولة الهوية.',
      'يلتزم جامعو البيانات بأخلاقيات العمل الميداني.',
      'التسجيل لا يُقدم كضمان للحصول على المساعدة.'
    ],
    safeguardsEn: [
      'Data must be collected with informed consent.',
      'Personal documents must never be displayed publicly.',
      'Donor reports must use anonymous aggregated statistics.',
      'Data collectors must follow ethical field behavior.',
      'Registration must not be presented as a guaranteed aid promise.'
    ],
    
    partnerOpportunitiesAr: 'يمكن للشركاء دعم أجهزة الهاتف أو الأجهزة اللوحية للفريق الميداني، تطوير قاعدة بيانات آمنة، ترجمة النماذج، تدريب العاملين، لوحات المتابعة، قوالب التقارير، ومراجعات حماية البيانات.',
    partnerOpportunitiesEn: 'Partners can support tablets or phones for field teams, secure database development, form translation, staff training, monitoring dashboards, reporting templates and data protection audits.'
  }
];
