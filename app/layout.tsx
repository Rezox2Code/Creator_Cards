import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creator Cards Tycoon',
  description: 'A trading card game built around YouTube creators.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
