import { HeroSection } from "@/components/HeroSection";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <main className="min-h-screen">
      <nav className="absolute top-0 w-full p-6 lg:px-12 flex justify-between z-50 pointer-events-none">
        <div className="text-xl font-bold tracking-tighter text-[#5a5f7e] dark:text-[#c4c8df] opacity-0 animate-fade-in delay-500">
          
        </div>
      </nav>
      <ThemeToggle />
      <HeroSection />
    </main>
  );
}
