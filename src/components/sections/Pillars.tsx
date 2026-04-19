import { FadeIn } from '@/components/ui/FadeIn';
import { PILLARS } from '@/content';

export function Pillars() {
  return (
    <section id="pillars" className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-sans text-4xl md:text-6xl font-normal tracking-tighter mb-16 md:mb-24 text-turquoise">
          Exploring AI effects on:
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-10 md:gap-16 pl-6 md:pl-24">
        {PILLARS.map((pillar, index) => (
          <FadeIn key={pillar.title}>
            <div className="group flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16">
              <div className="font-mono text-4xl md:text-6xl text-turquoise transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h3 className="font-sans text-4xl md:text-6xl font-normal tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">
                  {pillar.title}
                </h3>
                <p className="text-xl text-white/60 font-light max-w-2xl group-hover:translate-x-4 transition-transform duration-500 delay-75">
                  {pillar.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
