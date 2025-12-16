import { Project, Playlist } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Redesign E-commerce Mobile',
    category: 'UI/UX Design',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'Principle', 'Adobe XD'],
    description: 'Refonte complète de l\'expérience mobile pour une plateforme e-commerce de mode, avec focus sur la conversion et l\'engagement utilisateur.',
    problem: 'Le taux de conversion mobile était 40% inférieur au desktop. Les utilisateurs abandonnaient leur panier pendant le processus de checkout.',
    process: 'Audit UX complet, interviews utilisateurs (15 personnes), tests A/B, prototypage itératif, tests utilisateurs avec 30 participants.',
    result: 'Augmentation de 65% du taux de conversion mobile, réduction de 50% du taux d\'abandon panier, score SUS passé de 68 à 87.',
    color: '#1DB954'
  },
  {
    id: '2',
    title: 'Dashboard Analytics SaaS',
    category: 'Web Development',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    role: 'Full Stack Developer',
    tools: ['React', 'Node.js', 'D3.js', 'PostgreSQL'],
    description: 'Développement d\'un dashboard analytics temps réel pour une plateforme SaaS B2B avec visualisations de données complexes.',
    problem: 'Les clients n\'avaient pas de vision claire de leurs métriques business en temps réel. Les rapports étaient générés manuellement chaque semaine.',
    process: 'Architecture micro-services, design system React, intégration WebSocket pour le temps réel, optimisation des requêtes SQL.',
    result: 'Dashboard utilisé quotidiennement par 85% des clients, réduction de 90% du temps de génération de rapports, satisfaction client +45%.',
    color: '#9333EA'
  },
  {
    id: '3',
    title: 'Brand Motion Identity',
    category: 'Motion Design',
    cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    role: 'Motion Designer',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    description: 'Création d\'une identité visuelle animée complète pour une startup tech, incluant logo animé, transitions et templates.',
    problem: 'La marque manquait de dynamisme et de modernité. Pas de cohérence visuelle sur les supports digitaux.',
    process: 'Direction artistique, storyboarding, animation 2D/3D, création de guidelines motion, templates réutilisables.',
    result: 'Identité déployée sur tous les canaux digitaux, engagement social media +120%, reconnaissance de marque améliorée de 80%.',
    color: '#F59E0B'
  },
  {
    id: '4',
    title: 'Application Fitness & Wellbeing',
    category: 'UI/UX Design',
    cover: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop',
    role: 'Product Designer',
    tools: ['Figma', 'Protopie', 'Maze'],
    description: 'Design d\'une application mobile de coaching fitness personnalisé avec suivi de progression et gamification.',
    problem: 'Les utilisateurs manquent de motivation pour maintenir une routine fitness. Taux de rétention faible après 30 jours.',
    process: 'Research utilisateur, persona mapping, user journey, wireframing, prototypage haute fidélité, tests utilisateurs.',
    result: 'Rétention à 30 jours passée de 22% à 68%, sessions quotidiennes moyennes multipliées par 3, rating App Store 4.8/5.',
    color: '#EC4899'
  },
  {
    id: '5',
    title: 'Site Web Portfolio 3D',
    category: '3D & Web',
    cover: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    role: '3D Artist & Developer',
    tools: ['Three.js', 'Blender', 'React', 'GSAP'],
    description: 'Portfolio immersif en 3D avec expérience interactive et animations WebGL pour un studio de création.',
    problem: 'Le portfolio précédent ne reflétait pas le niveau d\'expertise technique et créative du studio.',
    process: 'Modélisation 3D, optimisation WebGL, animation interactive, progressive enhancement, optimisation performance.',
    result: 'Temps passé sur le site +250%, taux de rebond réduit de 45%, génération de 12 leads qualifiés en 2 mois.',
    color: '#06B6D4'
  },
  {
    id: '6',
    title: 'Design System Enterprise',
    category: 'UI/UX Design',
    cover: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop',
    role: 'Design System Lead',
    tools: ['Figma', 'Storybook', 'Zeroheight'],
    description: 'Création et maintenance d\'un design system complet pour une entreprise de 500+ employés avec 12 produits.',
    problem: 'Incohérence visuelle entre les produits, duplication du travail de design, dette technique UX croissante.',
    process: 'Audit design, tokenisation, création de composants atomiques, documentation, formation des équipes.',
    result: 'Temps de design réduit de 60%, cohérence visuelle sur 100% des produits, velocity des équipes dev +40%.',
    color: '#8B5CF6'
  }
];

export const playlists: Playlist[] = [
  {
    id: 'top-france',
    name: 'Top France',
    icon: 'trophy',
    projects: ['1', '2', '3', '4', '5', '6']
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Essentials',
    icon: 'palette',
    projects: ['1', '4', '6']
  },
  {
    id: 'web',
    name: 'Web Projects',
    icon: 'code',
    projects: ['2', '5']
  },
  {
    id: 'motion',
    name: 'Motion & 3D',
    icon: 'film',
    projects: ['3', '5']
  }
];
