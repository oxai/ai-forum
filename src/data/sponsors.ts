import type { Sponsor, SupportedLogo } from '@/types';

export const REGULAR_SPONSORS: Sponsor[] = [
  { name: 'Sa\u00efd Business School', image: '/sponsors/said-business-school.png', alt: 'Sa\u00efd Business School' },
];

export const SUPPORTED_BY: SupportedLogo[] = [
  {
    name: 'PhysicsX',
    src: '/supported-by/physicsx.png',
    alt: 'PhysicsX',
    className: 'h-40 md:h-[17rem] -my-8 md:-my-20 w-auto max-w-none object-contain grayscale contrast-200 brightness-200 mix-blend-screen invert translate-y-1 md:translate-y-3',
  },
  {
    name: 'Humanoid',
    src: '/supported-by/humanoid.png',
    alt: 'Humanoid',
    className: 'h-10 md:h-16 w-auto max-w-none object-contain',
  },
  {
    name: 'Gemini',
    src: '/supported-by/gemini.png',
    alt: 'Gemini',
    className: 'h-8 md:h-12 w-auto max-w-none object-contain mix-blend-screen brightness-125',
  },
  {
    name: 'Anthropic',
    src: '/supported-by/anthropic.png',
    alt: 'Anthropic',
    className: 'h-24 md:h-40 -my-6 md:-my-10 w-auto max-w-none object-contain grayscale contrast-200 brightness-200 mix-blend-screen invert translate-y-1 md:translate-y-2',
  },
  {
    name: 'Tony Blair Institute',
    src: '/supported-by/tony-blair-institute.webp',
    alt: 'Tony Blair Institute',
    className: 'h-20 md:h-32 -my-2 md:-my-4 w-auto max-w-none object-contain grayscale contrast-200 brightness-200 mix-blend-screen invert',
  },
  {
    name: 'Oxbridge AIX',
    src: '/supported-by/oxbridge-aix.png',
    alt: 'Oxbridge AIX',
    className: 'h-24 md:h-36 -my-4 md:-my-8 w-auto max-w-none object-contain grayscale contrast-200 brightness-200 invert mix-blend-screen translate-y-2 md:translate-y-3',
  },
];
