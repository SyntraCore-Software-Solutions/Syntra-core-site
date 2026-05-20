import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'alpha',
    title: 'Projeto Alpha',
    category: 'Sistema Web',
    description: 'Plataforma de gestão interna para empresa do setor logístico.',
    image: '/projects/alpha.jpg',
    link: '#',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'beta',
    title: 'Projeto Beta',
    category: 'Landing Page',
    description: 'Site de alta conversão para lançamento de produto digital.',
    image: '/projects/beta.jpg',
    link: '#',
    tags: ['Next.js', 'TailwindCSS'],
  },
  {
    id: 'gamma',
    title: 'Projeto Gamma',
    category: 'Automação',
    description: 'Script que reduziu 80% do trabalho manual de uma equipe inteira.',
    image: '/projects/gamma.jpg',
    link: '#',
    tags: ['Python', 'API REST'],
  },
];
