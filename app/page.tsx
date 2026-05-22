import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}
