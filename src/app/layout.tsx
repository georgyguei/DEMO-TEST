import type { Metadata } from 'next';
import { loomattic, nunito } from '@/lib/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Kangurus - Technical Test',
  description: 'Technical Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${loomattic.variable} antialiased ${nunito.variable} text-white`}
      >
        {children}
      </body>
    </html>
  );
}
