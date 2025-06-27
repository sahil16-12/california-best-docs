import Header from '@/components/ui/Header';
import LandingPage from '@/components/ui/LandingPage';
import Footer from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <LandingPage></LandingPage>
      </main>
      <Footer />
    </div>
  );
}