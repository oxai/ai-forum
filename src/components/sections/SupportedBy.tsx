import { motion } from 'motion/react';
import { SUPPORTED_BY } from '@/content';

/** Number of times the logo row is duplicated to create a seamless loop. */
const MARQUEE_REPEAT = 4;

export function SupportedBy() {
  const repeats = Array.from({ length: MARQUEE_REPEAT }, (_, index) => index);

  return (
    <>
      <div className="text-center mb-6 relative z-20">
        <span className="font-mono text-xs tracking-widest text-turquoise uppercase">
          Supported by
        </span>
      </div>

      <section className="w-full border-y border-turquoise/30 bg-black py-1 md:py-2 mb-16 relative">
        <div
          className="flex w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <motion.div
            className="flex items-center w-max will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
          >
            {repeats.map((repeatIndex) => (
              <div
                key={repeatIndex}
                className="flex items-center justify-center gap-12 md:gap-20 pr-12 md:pr-20 shrink-0"
              >
                {SUPPORTED_BY.map((logo) => (
                  <img
                    key={`${repeatIndex}-${logo.name}`}
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.className}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
