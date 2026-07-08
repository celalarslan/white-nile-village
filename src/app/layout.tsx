import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'White Nile Village Development | تنمية قرى النيل الأبيض',
  description:
    'A community-based rural development platform supporting gum arabic producers, agriculture, livestock, training, and social impact in White Nile State, Sudan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
