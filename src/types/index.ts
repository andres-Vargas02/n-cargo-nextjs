export interface NavLink {
  href: string;
  text: string;
  isActive?: boolean;
}

export interface NavbarProps {
  links: NavLink[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  trustText: string;
}

export interface CalculatorProps {
  cities: { value: string; label: string }[];
}

export interface Destination {
  flag: string;
  city: string;
  country: string;
  cities: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  flag: string;
  rating: number;
  text: string;
  initials: string;
  avatarColors: string;
}

export interface FooterLink {
  href: string;
  text: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}