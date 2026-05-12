export interface NavItem {
  name: string;
  link: string;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  img: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  link: string;
}

export interface HeroData {
  tagline: string;
  heading: string;
  subheading: string;
}

export interface ResumeData {
  heroData: HeroData;
  navItems: NavItem[];
  gridItems: GridItem[];
  projects: Project[];
  testimonials: Testimonial[];
  companies: Company[];
  workExperience: WorkExperience[];
  socialMedia: SocialMedia[];
}

export type Perspective = "default" | "recruiter" | "business" | "reader" | "professor";

export const PERSPECTIVE_LABELS: Record<Perspective, string> = {
  default: "默认视角",
  recruiter: "招聘方",
  business: "商务合作",
  reader: "同频的人",
  professor: "教授",
};
