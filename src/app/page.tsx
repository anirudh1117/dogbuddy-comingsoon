import { BackgroundDecor } from "@/components/coming-soon/background-decor";
import { HeroSection } from "@/components/coming-soon/hero-section";
import { NotifyForm } from "@/components/coming-soon/notify-form";
import { PetCompanions } from "@/components/coming-soon/pet-companions";
import { SiteFooter } from "@/components/coming-soon/site-footer";
import { SocialCtas } from "@/components/coming-soon/social-ctas";
import { TrustStrip } from "@/components/coming-soon/trust-strip";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecor />
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-[0_20px_80px_rgba(75,45,31,0.13)] backdrop-blur-xl sm:p-8 lg:p-12">
          <HeroSection />
          <PetCompanions />
          <NotifyForm />
          <SocialCtas />
          <TrustStrip />
          <SiteFooter />
        </div>
      </section>
    </main>
  );
}
