export const EVENT = {
  name: 'Oxford Frontier AI Forum 2026',
  shortName: 'Oxford Frontier AI Forum',
  tagline: 'A High-Conviction Gathering at the Frontier of Intelligence',
  dateLabel: 'Saturday 30 May 2026 · Mathematical Institute, Oxford',
  /** Used by the countdown timer. */
  startIso: '2026-05-30T09:00:00Z',
  earlyBirdDeadlineIso: '2026-04-24T23:59:59Z',
  venueUrl: 'https://maps.google.com/?q=Mathematical+Institute+University+of+Oxford',
  applyFormUrl: 'https://luma.com/aiforum',
  aboutUrl: 'https://www.oxai.org/about-us',
  maxAttendees: 400,
  heroCtaText: 'Event Tickets',
  applyCtaText: 'Get Your Ticket',
} as const;

export const INTRO_PARAGRAPH =
  'Oxford AI Society is the biggest AI student society in Europe, focused on making AI beneficial and accessible. On 30 May 2026, 400 students, researchers, builders, and institutional leaders will gather at Oxford\u2019s Mathematical Institute for a full-day forum on the future of AI. The event is designed for serious discussion and meaningful exchange, bringing together people exploring how AI is shaping knowledge, institutions, and society. It covers the full range of frontier technology, including AI systems, robotics, quantum computing, and real-world applications, with attention to both current capabilities and future impact.';

export function isIntroWordHighlighted(word: string, index: number): boolean {
  return (
    (index >= 3 && index <= 8) ||
    word === 'AI.' ||
    word === 'frontier' ||
    word === 'technology,'
  );
}
