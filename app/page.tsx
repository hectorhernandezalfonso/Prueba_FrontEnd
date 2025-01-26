// app/page.tsx
import Header from '@/components/Header';
import Features from '@/components/Feature';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
