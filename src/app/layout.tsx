import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WNDEO | White Nile Development & Environment Organization | منظمة النيل الأبيض للتنمية والبيئة',
  description:
    'White Nile Development & Environment Organization (WNDEO) - A community-based rural development platform in White Nile State, Sudan.',
  icons: {
    icon: '/WNDEO-favicon.png',
    shortcut: '/WNDEO-favicon.png',
    apple: '/WNDEO-favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
