// Logo files in public/assets/skills. The SVGs come from devicon (MIT, see
// LICENSE-devicon.txt); coldfusion.webp is Adobe's ColdFusion logo.
export const skills: {
  name: string;
  logo: string;
  /** The logo is solid black, so it needs inverting on a dark background. */
  dark?: boolean;
}[] = [
  { name: 'Java', logo: 'java.svg' },
  { name: 'Python', logo: 'python.svg' },
  { name: 'C#', logo: 'csharp.svg' },
  { name: 'PHP', logo: 'php.svg' },
  { name: 'ColdFusion', logo: 'coldfusion.webp' },
  { name: 'JavaScript', logo: 'javascript.svg' },
  { name: 'Laravel', logo: 'laravel.svg' },
  { name: 'Livewire', logo: 'livewire.svg' },
  { name: 'Vue', logo: 'vuejs.svg' },
  { name: 'Alpine.js', logo: 'alpinejs.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'Spring Boot', logo: 'spring.svg' },
  { name: 'HTML5', logo: 'html5.svg' },
  { name: 'CSS3', logo: 'css3.svg' },
  { name: 'Docker', logo: 'docker.svg' },
  { name: 'Git', logo: 'git.svg' },
  { name: 'MySQL', logo: 'mysql.svg' },
  { name: 'SQL Server', logo: 'microsoftsqlserver.svg' },
  { name: 'Tailwind CSS', logo: 'tailwindcss.svg' },
  { name: 'jQuery', logo: 'jquery.svg' },
  { name: 'Unreal Engine', logo: 'unrealengine.svg', dark: true },
];
