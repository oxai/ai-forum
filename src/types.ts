export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  emphasis?: boolean;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface ProgramItem {
  title: string;
  description: string;
}

export interface RegistryCategory {
  title: string;
  description: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  image: string;
  bio: Array<string | { highlight: string }>;
}

export interface Sponsor {
  name: string;
  image: string;
  alt: string;
}

export interface SupportedLogo {
  name: string;
  src: string;
  alt: string;
  className: string;
}
