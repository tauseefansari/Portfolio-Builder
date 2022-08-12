import * as MUIIcons from '@mui/icons-material';
import * as DevIcons from 'react-icons/di';

export type Configuration = {
  tabTitle?: string;
  imagesPreload: string[];
  socials: Social[];
  navigation: Navigation;
  header: Header;
  about: About;
  skills: Skills;
  timeline: Timeline;
  portfolio: Portfolio;
  testimonials: Testimonials;
  contact: Contact;
  footer: Footer;
};

export type Social = {
  iconName: keyof typeof MUIIcons;
  url: string;
};

export type Navigation = {
  links: NavFooterLink[];
};

export type NavFooterLink = {
  id: string;
  title: string;
  iconName?: keyof typeof MUIIcons;
};

export type Header = {
  id: string;
  header: string;
  title: string;
  subTitle: string;
  downloadCVBtn: DownloadCvbtn;
  letsTalkBtn: LetsTalkBtn;
  headerImage: string;
};

export type DownloadCvbtn = {
  title: string;
  url: string;
};

export type LetsTalkBtn = {
  title: string;
  link: string;
};

export type About = {
  id: string;
  header: string;
  title: string;
  aboutImage: string;
  aboutCards: AboutCard[];
  aboutDescriptions: string;
};

export type AboutCard = {
  iconName: keyof typeof MUIIcons;
  title: string;
  description: string;
};

export type Skills = {
  id: string;
  header: string;
  title: string;
  skillsCards: SkillsCard[];
};

export type SkillsCard = {
  iconName: keyof typeof DevIcons;
  title: string;
  progress: string;
};

export type Timeline = {
  id: string;
  header: string;
  title: string;
  timelineCards: TimelineCard[];
};

export type TimelineCard = {
  date: string;
  title: string;
  description: string;
};

export type Portfolio = {
  id: string;
  header: string;
  title: string;
  portfolioCards: PortfolioCard[];
};

export type PortfolioCard = {
  image: string;
  title: string;
  description: string;
  buttons: Button[];
};

export type Button = {
  title: string;
  url: string;
};

export type Testimonials = {
  id: string;
  header: string;
  title: string;
  testimonialsCards: TestimonialsCard[];
};

export type TestimonialsCard = {
  image: string;
  title: string;
  description: string;
};

export type Contact = {
  id: string;
  header: string;
  title: string;
  mailSubject?: string;
  emailKey?: string;
  contactCards: ContactCard[];
  contactForm: ContactForm[];
  submitBtn: string;
};

export type ContactCard = {
  iconName: keyof typeof MUIIcons;
  title: string;
  description: string;
  link: ContactCardLink;
};

export type ContactCardLink = {
  url: string;
  title: string;
};

export type ContactForm = {
  type: string;
  placeholder: string;
};

export type Footer = {
  id: string;
  header: string;
  links: NavFooterLink[];
  copyright: string;
};
