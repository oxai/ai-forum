import type { NavLink } from '@/types';
import { EVENT } from './event';
import { CREDITS } from './credits';

export const NAV_LINKS: NavLink[] = [
  { label: 'THE FORUM', href: '#forum' },
  { label: 'REGISTRY', href: '#registry' },
  { label: 'PROGRAMME', href: '#itinerary' },
  { label: 'FACULTY', href: '#faculty' },
  { label: 'ABOUT OXAI', href: EVENT.aboutUrl, external: true },
  { label: 'CONTACT', href: `mailto:${CREDITS.contactEmail}`, external: true },
  { label: 'GET TICKET', href: '#apply', emphasis: true },
];
