export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface Differential {
  icon: string;
  title: string;
  text: string;
}

export interface Founder {
  name: string;
  role: string;
  initials: string;
  description: string;
  linkedin: string;
  github: string;
  photo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}
