import { Metadata } from 'next';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Destinations from '@/components/sections/Destinations';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';
import FloatingContact from '@/components/sections/FloatingContact';

export const metadata: Metadata = {
  title: 'Hải Long Kim Tourist - Khám Phá Việt Nam',
  description:
    'Trải nghiệm du lịch tuyệt vời với Hải Long Kim. Hướng dẫn viên chuyên nghiệp, tour cá nhân hóa và mức giá tốt nhất cho kỳ nghỉ Việt Nam của bạn.',
  openGraph: {
    title: 'Hải Long Kim Tourist - Khám Phá Việt Nam',
    description: 'Trải nghiệm du lịch tuyệt vời với Hải Long Kim Tourist.',
    type: 'website',
    url: 'https://hailongkim.com',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Hải Long Kim Tourist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hải Long Kim Tourist - Khám Phá Việt Nam',
    description: 'Trải nghiệm du lịch tuyệt vời với Hải Long Kim Tourist.',
    images: ['/hero-bg.jpg'],
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="min-h-screen bg-background theme-transition">
      <Header />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Services />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
