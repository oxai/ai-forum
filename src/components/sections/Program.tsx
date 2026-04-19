import { FadeIn } from '@/components/ui/FadeIn';
import { PROGRAM_ITEMS } from '@/content';

export function Program() {
  return (
    <section id="program" className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-sans text-4xl md:text-6xl font-normal tracking-tighter mb-12 md:mb-24 text-turquoise">
          What to Expect
        </h2>
      </FadeIn>

      <div className="flex flex-col pl-6 md:pl-24">
        {PROGRAM_ITEMS.map((item) => (
          <FadeIn key={item.title}>
            <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 py-6 md:py-10 border-y border-white/20 -mt-[1px] relative transition-colors duration-500 hover:border-turquoise hover:z-10">
              <h3 className="font-sans text-2xl md:text-5xl font-normal tracking-tighter group-hover:text-turquoise transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-white/70 font-light max-w-xl group-hover:text-white transition-colors duration-500 text-left md:text-right">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
