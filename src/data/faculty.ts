import type { FacultyMember } from '@/types';

export const FACULTY: FacultyMember[] = [
  {
    name: 'James Dancer',
    role: 'Chair, Oxford Alumni Association',
    image: '/faculty/james-dancer.jpeg',
    bio: [
      'As a veteran of the Oxford entrepreneurship circuit and Chair of the Oxford Alumni Association, James represents the bridge between frontier research and global infrastructure. His leadership focuses on ',
      { highlight: 'scaling high-impact initiatives' },
      ' and fostering the ',
      { highlight: 'global network of Oxford\u2019s most innovative minds' },
      '. In his seminar, "The Capitalization of Frontier Tech," he provides a ',
      { highlight: 'definitive blueprint for the next generation of founders' },
      ' looking to navigate the University\u2019s legacy and future.',
    ],
  },
  {
    name: 'Philip Torr',
    role: 'World Renowned AI Scientist',
    image: '/faculty/philip-torr.jpg',
    bio: [
      'A leading researcher in computer vision and deep learning at the University of Oxford, Professor Torr is a ',
      { highlight: 'Fellow of the Royal Academy of Engineering' },
      ' and leader of the Torr Vision Group. His work focuses on ',
      { highlight: 'robust AI systems and their real-world applications' },
      ', resulting in a research impact of over ',
      { highlight: '129,000 citations' },
      ' and an ',
      { highlight: 'h-index of 152' },
      '. As a globally recognized authority, his contributions define the frontiers of intelligent infrastructure.',
    ],
  },
  {
    name: 'Dr Scott Hale',
    role: 'Director, Oxford Internet Institute',
    image: '/faculty/scott-hale.jpg',
    bio: [
      'An Associate Professor and Director of the Oxford Internet Institute, Dr Scott Hale\u2019s research focuses on ',
      { highlight: 'computational social science' },
      ' and the intersection of technology and society. His pioneering work in understanding digital platforms and human behaviour. As a leading voice in the field, his insights are crucial for ',
      { highlight: 'shaping the future of internet governance' },
      '.',
    ],
  },
];
