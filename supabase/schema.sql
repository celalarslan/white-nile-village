-- Beyaz Nil Köy Kalkınma (White Nile Village Development)
-- Supabase Schema Definition

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Households / Registrations Table
CREATE TABLE IF NOT EXISTS public.households (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    application_number VARCHAR(20) UNIQUE NOT NULL,
    head_of_family VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    village VARCHAR(255) NOT NULL,
    region VARCHAR(255),
    id_number VARCHAR(100),
    id_document_url TEXT,
    family_photo_url TEXT,
    
    -- Demographics
    household_size INTEGER DEFAULT 1,
    children_count INTEGER DEFAULT 0,
    women_count INTEGER DEFAULT 0,
    youth_count INTEGER DEFAULT 0,
    school_children INTEGER DEFAULT 0,
    has_disabled BOOLEAN DEFAULT FALSE,
    is_literate BOOLEAN DEFAULT FALSE,
    education_level VARCHAR(100),
    has_vocational BOOLEAN DEFAULT FALSE,
    
    -- Economics
    main_income_source VARCHAR(100),
    monthly_income_usd DECIMAL(10,2),
    annual_income_usd DECIMAL(12,2),
    
    -- Gum Arabic
    gum_arabic_trees INTEGER DEFAULT 0,
    annual_production_kg DECIMAL(10,2) DEFAULT 0,
    needs_training BOOLEAN DEFAULT FALSE,
    
    -- Agriculture
    has_land BOOLEAN DEFAULT FALSE,
    land_size_acres DECIMAL(10,2) DEFAULT 0,
    water_source VARCHAR(100),
    crops TEXT,
    suitable_for_tomato BOOLEAN DEFAULT FALSE,
    
    -- Livestock
    cattle_count INTEGER DEFAULT 0,
    sheep_goat_count INTEGER DEFAULT 0,
    has_milk_production BOOLEAN DEFAULT FALSE,
    has_vet_support BOOLEAN DEFAULT FALSE,
    
    -- Needs
    most_urgent_need VARCHAR(100),
    training_need VARCHAR(255),
    notes TEXT,
    
    -- Metadata
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Partner Applications Table
CREATE TABLE IF NOT EXISTS public.partner_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    org_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100),
    support_types TEXT[],
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new', -- new, reviewed, contacted, rejected
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Trainings Table
CREATE TABLE IF NOT EXISTS public.trainings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    training_date DATE,
    max_participants INTEGER DEFAULT 0,
    current_participants INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'planned', -- planned, ongoing, completed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Certificates Table
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    certificate_number VARCHAR(50) UNIQUE NOT NULL,
    participant_name VARCHAR(255) NOT NULL,
    household_id UUID REFERENCES public.households(id),
    training_id UUID REFERENCES public.trainings(id),
    issue_date DATE NOT NULL,
    is_valid BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    status VARCHAR(50) DEFAULT 'planned', -- planned, active, completed
    target_audience_en VARCHAR(255),
    target_audience_ar VARCHAR(255),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE public.households ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trainings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Anonymous users can insert households and partner applications (Public Forms)
CREATE POLICY "Enable insert for anonymous users" ON public.households FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.partner_applications FOR INSERT WITH CHECK (true);

-- Anonymous users can read trainings, projects and certificates
CREATE POLICY "Enable read for anonymous users" ON public.trainings FOR SELECT USING (true);
CREATE POLICY "Enable read for anonymous users" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Enable read for anonymous users" ON public.certificates FOR SELECT USING (true);

-- Only authenticated admins can view and update everything
CREATE POLICY "Enable all for authenticated users" ON public.households FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable all for authenticated users" ON public.partner_applications FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable all for authenticated users" ON public.trainings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable all for authenticated users" ON public.certificates FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable all for authenticated users" ON public.projects FOR ALL USING (auth.role() = 'authenticated');
