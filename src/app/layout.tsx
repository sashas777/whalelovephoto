import type { Metadata } from "next";
import "./globals.css";
import { Didact_Gothic, Satisfy} from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

const didactGothic = Didact_Gothic({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-didact-gothic',
    display: 'swap',
});

const satisfy = Satisfy({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-satisfy',
    display: 'swap',
});

export const metadata: Metadata = {
  title: "Ekaterina Ferrante | Create Timeless Memories Today",
  description: "Professional newborn photography in New York City by Ekaterina Ferrante. Capture precious moments with expert photoshoots tailored for families.",
    openGraph: {
        title: 'Ekaterina Ferrante | Create Timeless Memories Today',
        description: 'Professional newborn photography in New York City by Ekaterina Ferrante. Capture precious moments with expert photoshoots tailored for families.',
        images: ['/images/logo.png'], // Path to your OG image
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${didactGothic.variable} ${satisfy.variable}`}>
      <body className="font-didact-gothic antialiased">
          <Header />
          <main>
              {children}
          </main>
          <Footer />
          <ToastContainer />
      </body>
    </html>
  );
}
