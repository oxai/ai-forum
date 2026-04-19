import { FadeIn } from '@/components/ui/FadeIn';
import { REGISTRY_CATEGORIES, REGISTRY_INTRO } from '@/content';

export function Registry() {
  return (
    <section id="registry" className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter mb-12 md:mb-16 text-center text-turquoise">
          Cultivating Connections
        </h2>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <FadeIn className="lg:w-7/12 w-full">
          <img
            src="/vip-networking.jpg"
            alt="VIP Networking"
            className="w-full aspect-[4/3] lg:aspect-auto h-auto rounded-sm opacity-80 object-cover shadow-2xl"
          />
        </FadeIn>

        <FadeIn className="lg:w-5/12 flex flex-col gap-8">
          <p className="text-xl text-white/80 font-light leading-relaxed">
            {REGISTRY_INTRO}
          </p>
          <div className="flex flex-col gap-6">
            {REGISTRY_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="border-l border-turquoise pl-6"
              >
                <h3 className="font-sans text-2xl font-normal mb-2">
                  {category.title}
                </h3>
                <p className="text-white/70 font-light">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
