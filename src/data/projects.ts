export interface Project {
  name: string;
  tech: string[];
  status?: string;
  summary: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    name: 'Project Z Defense',
    tech: ['Java'],
    status: 'In progress',
    summary:
      'A wave-based survival game where you defend against monsters coming from every direction. Each wave brings more and stronger enemies, which can drop better weapons with longer range or faster attacks.',
    highlights: [
      'Sprite animation rendered with JFrame and JPanel',
      'Player movement and attacks driven by ActionListener input handling',
    ],
  },
  {
    name: 'CLI Dungeons & Dragons Game',
    tech: ['Java'],
    summary:
      'A turn-based battle game in the console. Each side picks a character, the faster one attacks first, and the defender counterattacks, until one team’s characters have all fainted.',
    highlights: ['Polymorphism used to share a template for player and computer behavior', 'Live character stats for both sides'],
  },
  {
    name: 'CLI Blackjack',
    tech: ['Java'],
    summary:
      'Blackjack against a computer dealer in the console. Bet, double, split, or end your turn, then the computer plays its hand, and whichever hand is closer to 21 wins.',
    highlights: [
      'Cards and deck modeled as encapsulated objects',
      'Polymorphism used for the player and computer hands',
    ],
  },
  {
    name: 'CLI Calculator',
    tech: ['Java'],
    summary:
      'A simple console calculator: pick addition, subtraction, multiplication, or division, enter two numbers, and get the result.',
  },
];

