import { FadeIn } from '@/components/ui/FadeIn';
import { ITINERARY } from '@/content';

export function Itinerary() {
  return (
    <section id="itinerary" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-sans text-4xl md:text-6xl font-normal tracking-tighter mb-16 text-center text-turquoise">
          Programme
        </h2>
      </FadeIn>

      <FadeIn className="mb-20">
        <img
          src="/speaking.jpg"
          alt="Lecture Theatre"
          className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm opacity-80"
        />
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10 relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/20" />
        {ITINERARY.map((item) => (
          <FadeIn key={`${item.time}-${item.title}`} className="relative pl-12">
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-rich-black border border-turquoise flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-turquoise" />
            </div>
            <div className="font-mono text-lg md:text-xl text-turquoise mb-2 tracking-widest">
              {item.time}
            </div>
            <h3 className="font-sans text-2xl font-normal mb-3">
              {item.title}
            </h3>
            <p className="font-mono text-white/70 font-light leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
