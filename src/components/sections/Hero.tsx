import { Button } from '@/components/ui/Button';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { FadeIn } from '@/components/ui/FadeIn';
import { EVENT } from '@/content';

function HeroBackground() {
  return (
     <div className="absolute inset-0 z-[-1]">
      <img
        // src="/hero.jpeg"
        alt="Museum of Natural History crowd"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black/50 via-rich-black/80 to-rich-black" />
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6">
      <img
        src="/branding/oxai-logo-final.png"
        alt="OXAI Logo"
        className="w-40 md:w-72 h-auto object-contain mix-blend-screen opacity-90"
      />
      <div className="hidden md:block w-px h-32 bg-white/20" />
      <h1 className="font-sans text-3xl md:text-5xl lg:text-7xl font-normal tracking-tighter leading-[1.1] md:text-left">
        OXFORD FRONTIER AI
        <br />
        FORUM 2026
      </h1>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-20">
      <HeroBackground />

      <FadeIn className="flex flex-col items-center w-full max-w-6xl">
        <HeroTitle />

        <a
          href={EVENT.venueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm md:text-base tracking-[0.3em] text-turquoise uppercase mb-8 hover:underline decoration-turquoise/50 underline-offset-8"
        >
          {EVENT.dateLabel}
        </a>

        <h2 className="font-sans text-xl md:text-3xl lg:text-4xl font-normal tracking-tight mb-12 md:mb-16 text-white/70 max-w-4xl">
          {EVENT.tagline}
        </h2>

        <CountdownTimer targetIso={EVENT.startIso} />

        <Button
          href={EVENT.applyFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="mt-8 md:mt-12"
        >
          {EVENT.heroCtaText}
        </Button>
      </FadeIn>
    </section>
  );
}
