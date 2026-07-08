# White Nile Village Development (تنمية قرى النيل الأبيض)

A comprehensive, bilingual (Arabic RTL / English LTR) Next.js web application designed as a "Digital NGO Office" for rural development in White Nile State, Sudan.

## Features

- **Bilingual Interface**: Full support for Arabic (RTL, default) and English (LTR) using Next.js App Router i18n.
- **Producer Registration System**: Multi-step registration form for families, covering demographics, gum arabic, agriculture, livestock, and needs assessment.
- **Admin Dashboard**: Secure admin panel to manage registrations, view statistics, and handle partner applications.
- **Training & Certificates**: Track training programs and verify participant certificates securely.
- **Transparency & Reports**: Showcase impact indicators, goals, and activity reports to build trust with international donors.
- **Responsive Design**: Professional, clean NGO aesthetic using Tailwind CSS v4.

## Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Validation**: Zod (Ready for form validation implementation)

## Prerequisites

- Node.js 20.x or later
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically redirect to the Arabic version (`/ar`).

## Demo Admin Access

A mock authentication system is in place for demonstration purposes.

- **URL**: `/admin/login`
- **Email**: `admin@whiteniledev.org`
- **Password**: `demo12345`

> **Note on Data Privacy & Security**: This project currently uses local mock data and `localStorage` for authentication. In a production environment, this MUST be replaced with a secure backend (e.g., Supabase) and proper authentication. Personal ID documents and sensitive data should never be exposed publicly.

## Future Development & Recommendations

1. **Database Integration**: Implement Supabase for secure data storage.
2. **File Uploads**: Connect the ID/Document upload fields to a secure object storage bucket.
3. **Form Validation**: Add full Zod schema validation to the multi-step registration form.
4. **PDF Generation**: Implement dynamic PDF generation for certificates and reports.
5. **Excel Export**: Add CSV/Excel export functionality in the admin panel.

## License

This project is created for social impact and rural development purposes.
