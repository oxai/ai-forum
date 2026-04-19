import type { ReactNode } from 'react';
import { motion, useTransform, type MotionValue } from 'motion/react';

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted?: boolean;
}

/**
 * A single word whose opacity is mapped to a slice of the parent scroll
 * progress. Used to build the word-by-word reveal on the intro paragraph.
 */
export function Word({
  children,
  progress,
  range,
  isHighlighted = false,
}: WordProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] mt-[0.1em] ${
        isHighlighted ? 'text-turquoise' : ''
      }`}
    >
      {children}
    </motion.span>
  );
}
