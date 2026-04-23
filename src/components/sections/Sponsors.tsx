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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-4xl mx-auto">
          {REGULAR_SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="relative border border-white/10 bg-white/5 p-6 md:p-10 flex items-center justify-center group hover:border-turquoise/50 transition-colors duration-500 h-32 md:h-48"
            >
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                className="w-3/4 md:w-4/5 h-auto object-contain object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
