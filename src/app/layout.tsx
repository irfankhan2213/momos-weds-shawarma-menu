import type { Metadata } from 'next';
import './globals.css';
import '../App.css';

export const metadata: Metadata = {
  title: 'Momo Weds Shawarma | Premium Digital Restaurant Menu & Ordering System',
  description: 'Order authentic Delhi Shawarmas, Kathi Rolls, Dumplings, and Tandoori starters online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
