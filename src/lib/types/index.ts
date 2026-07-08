// ============================================================
// White Nile Village Development - Type Definitions
// ============================================================

// Locale type
export type Locale = 'ar' | 'en';

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
}

// ============================================================
// Household Registration
// ============================================================

export interface Household {
  id: string;
  applicationNumber: string;
  village: string;
  region: string;
  headOfFamily: string;
  phone: string;
  idDocumentType: string;
  idNumber: string;
  idDocumentUrl?: string;
  familyPhotoUrl?: string;
  householdSize: number;
  childrenCount: number;
  womenCount: number;
  youthCount: number;
  schoolChildrenCount: number;
  hasDisabledMember: boolean;
  // Education
  isLiterate: boolean;
  educationLevel: string;
  hasVocationalTraining: boolean;
  // Income
  mainIncomeSource: string;
  monthlyIncome: number;
  annualIncome: number;
  agricultureIncome: number;
  livestockIncome: number;
  gumArabicIncome: number;
  otherIncome: number;
  debtStatus?: string;
  // Gum Arabic
  gumArabic: GumArabicProfile;
  // Agriculture
  agriculture: AgricultureProfile;
  // Livestock
  livestock: LivestockProfile;
  // Needs
  needs: NeedsAssessment;
  // Consent
  consentDataUse: boolean;
  consentPrivacy: boolean;
  consentAnonymousReporting: boolean;
  // Status
  status: 'pending' | 'approved' | 'rejected' | 'incomplete';
  createdAt: string;
  updatedAt: string;
}

export interface GumArabicProfile {
  treeCount: number;
  estimatedAnnualProduction: string;
  buyer: string;
  averageSellingPrice: number;
  harvestingMethod: string;
  storageMethod: string;
  needsTraining: boolean;
}

export interface AgricultureProfile {
  hasLand: boolean;
  landSize: string;
  waterSource: string;
  crops: string[];
  suitableForTomato: boolean;
  hasSeedAccess: boolean;
  hasIrrigation: boolean;
}

export interface LivestockProfile {
  cattleCount: number;
  sheepGoatCount: number;
  hasMilkProduction: boolean;
  hasFeedProblem: boolean;
  hasVetSupport: boolean;
  hasDiseaseProblem: boolean;
}

export interface NeedsAssessment {
  mostUrgentNeed: string;
  trainingNeed: string;
  agricultureSupport: string;
  livestockSupport: string;
  seedlingNeed: string;
  waterNeed: string;
  womenYouthSupport: string;
  notes: string;
}

export interface FamilyMemberSummary {
  totalMembers: number;
  children: number;
  women: number;
  youth: number;
  schoolChildren: number;
  disabled: number;
}

// ============================================================
// Training & Certificates
// ============================================================

export interface Training {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  participantCount: number;
  maxParticipants: number;
  status: 'planned' | 'ongoing' | 'completed';
  topics: string[];
}

export interface TrainingParticipant {
  id: string;
  trainingId: string;
  householdId?: string;
  name: string;
  phone: string;
  attendance: boolean;
  certificateIssued: boolean;
  certificateId?: string;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  participantName: string;
  trainingId: string;
  trainingTitleAr: string;
  trainingTitleEn: string;
  issueDate: string;
  status: 'valid' | 'revoked';
}

// ============================================================
// Projects & Programs
// ============================================================

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  status: 'preparation' | 'planned' | 'active' | 'completed';
  targetAudience: string;
  impactIndicators: string[];
  startDate?: string;
  endDate?: string;
  image?: string;
}

export interface Program {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  targetAudienceAr: string;
  targetAudienceEn: string;
  expectedImpactAr: string;
  expectedImpactEn: string;
  icon: string;
  image?: string;
}

// ============================================================
// Reports & Documents
// ============================================================

export interface Report {
  id: string;
  titleAr: string;
  titleEn: string;
  type: 'activity' | 'training' | 'financial' | 'impact' | 'field';
  date: string;
  downloadUrl?: string;
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: 'id' | 'training' | 'hac' | 'committee' | 'grant' | 'other';
  url: string;
  uploadedAt: string;
  relatedTo?: string;
}

// ============================================================
// Partners & News
// ============================================================

export interface PartnerApplication {
  id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  supportTypes: string[];
  message: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface NewsPost {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  category: string;
  date: string;
  imageUrl?: string;
  slug: string;
}

// ============================================================
// Admin & Dashboard
// ============================================================

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface DashboardStats {
  totalFamilies: number;
  totalPeople: number;
  totalProducers: number;
  womenCount: number;
  youthCount: number;
  totalGumArabicTrees: number;
  totalCattle: number;
  totalSheepGoat: number;
  trainedPeople: number;
  certificateCount: number;
  pendingRegistrations: number;
  partnerApplications: number;
}

// Dictionary type for i18n
export interface Dictionary {
  [key: string]: string | Dictionary;
}
