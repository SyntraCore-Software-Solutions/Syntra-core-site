export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: '1',
    icon: 'Code2',
    title: 'Desenvolvimento Web',
    description: 'Aplicações web modernas, responsivas e escaláveis. React, Vue, Next.js e muito mais.',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: '2',
    icon: 'Smartphone',
    title: 'Desenvolvimento Mobile',
    description: 'Apps nativos e cross-platform para iOS e Android com performance otimizada.',
    tags: ['React Native', 'Flutter', 'Swift'],
  },
  {
    id: '3',
    icon: 'Database',
    title: 'Backend & APIs',
    description: 'Arquitetura robusta, APIs RESTful/GraphQL e microserviços escaláveis.',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: '4',
    icon: 'Zap',
    title: 'DevOps & Cloud',
    description: 'Deploy automatizado, CI/CD, cloud infrastructure e monitoramento em tempo real.',
    tags: ['AWS', 'Docker', 'GitHub Actions'],
  },
  {
    id: '5',
    icon: 'PenTool',
    title: 'UI/UX Design',
    description: 'Design systems, protótipos interativos e interfaces focadas em experiência.',
    tags: ['Figma', 'Design System', 'UX'],
  },
  {
    id: '6',
    icon: 'BarChart3',
    title: 'Consultoria Tech',
    description: 'Estratégia de tecnologia, otimização de processos e transformação digital.',
    tags: ['Strategy', 'Audit', 'Tech Stack'],
  },
];
