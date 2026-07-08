import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WNDEO | White Nile Development & Environment Organization | منظمة النيل الأبيض للتنمية والبيئة',
  description:
    'White Nile Development & Environment Organization (WNDEO) - A community-based rural development platform in White Nile State, Sudan.',
  icons: {
    icon: '/WNDEO-favicon.webp',
    shortcut: '/WNDEO-favicon.webp',
    apple: '/WNDEO-favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
