import { Metadata } from 'next';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Destinations from '@/components/sections/destinations';
import Services from '@/components/sections/services';
import Gallery from '@/components/sections/gallery';
import Testimonials from '@/components/sections/testimonials';
import Partners from '@/components/sections/partners';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/Footer';
import FabSection from '@/components/sections/fab';

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

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-background theme-transition">
      <Header locale={locale} />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Destinations />
        <Services />
        <Gallery />
        <Testimonials />
        <Partners />
        <ContactSection />
      </main>
      <Footer />
      <FabSection />
    </div>
  );
}
