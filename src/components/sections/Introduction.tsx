import { useMemo, useRef } from 'react';
import { useScroll } from 'motion/react';
import { Word } from '@/components/ui/Word';
import { INTRO_PARAGRAPH, isIntroWordHighlighted } from '@/content';

export function Introduction() {
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ['start 85%', 'center 55%'],
  });

  const words = useMemo(() => INTRO_PARAGRAPH.split(' '), []);

  return (
    <section id="forum" className="py-12 md:py-16 px-6 max-w-5xl mx-auto">
      <div
        ref={revealRef}
        className="font-mono text-lg md:text-2xl font-light leading-relaxed text-white text-left"
      >
        <p>
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={`${index}-${word}`}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlighted={isIntroWordHighlighted(word, index)}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
