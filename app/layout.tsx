import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creator Cards Tycoon',
  description: 'Trading card game built around YouTube creators.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
