export interface TechStack {
  icon: string;
  name: string;
  isImage?: boolean;
}

export const TECH_STACK: TechStack[] = [
  {
    icon: '🅰️',
    name: 'Angular'
  },
  {
    icon: '⚛️',
    name: 'React'
  },
  {
    icon: '🔷',
    name: '.NET'
  },
  {
    icon: '🎮',
    name: 'Unity'
  },
  {
    icon: 'images/ow-logo-dark.svg',
    name: 'Overwolf',
    isImage: true
  },
  {
    icon: '🎯',
    name: 'Unreal'
  },
  {
    icon: '☁️',
    name: 'Cloud'
  }
];
