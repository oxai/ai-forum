import { FadeIn } from '@/components/ui/FadeIn';
import { REGULAR_SPONSORS } from '@/content';

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="pt-48 md:pt-80 pb-12 md:pb-16 px-6 max-w-7xl mx-auto"
    >
      <FadeIn>
        <h2 className="font-mono text-sm md:text-base tracking-[0.2em] text-turquoise uppercase text-center mb-12">
          Brought to you by
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full max-w-4xl mx-auto">
          {REGULAR_SPONSORS.map((sponsor) => {
            const card = (
              <div
                className="relative border border-white/10 bg-white/5 p-6 md:p-10 flex items-center justify-center group hover:border-turquoise/50 transition-colors duration-500 h-32 md:h-48 w-full md:w-80"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  className="h-16 md:h-24 w-auto max-w-[80%] object-contain object-center"
                />
              </div>
            );
            return sponsor.href ? (
              <a key={sponsor.name} href={sponsor.href} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <div key={sponsor.name}>{card}</div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
