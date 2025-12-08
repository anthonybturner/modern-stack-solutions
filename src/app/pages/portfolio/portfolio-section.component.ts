import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  downloadUrl?: string;
  type: 'demo' | 'download';
  wip?: boolean;
}

@Component({
  selector: 'app-portfolio-section',
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSection {
  projects: Project[] = [
    {
      id: 0,
      name: "Movies Database Built with React",
      description: "Interactive movie database with search, filtering, and detailed movie information. Built with React and modern web technologies.",
      image: "images/portfolio/react-movie-database-thumb.jpg",
      liveUrl: "https://react-movie-database-nine.vercel.app/",
      sourceUrl: "https://github.com/anthonybturner/ReactMovieDatabase",
      type: 'demo'
    },
    {
      id: 1,
      name: "Marvel Rivals Stats Fan Site",
      description: "A comprehensive stats tracking website for Marvel Rivals game. Features hero statistics, match tracking, and player analytics built with Angular v20.",
      image: "images/portfolio/marvel-rivals-site-thumb.jpg",
      liveUrl: "https://marvelrivalsstats.vercel.app/",
      sourceUrl: "https://github.com/anthonybturner/marvelrivalsui",
      type: 'demo'
    },
    {
     id: 2,
     name: "Personal Portfolio Website (next.js - official)",
     description: "My personal portfolio showcasing projects, skills, and experience. Clean, modern design built with responsive web technologies.",
     image: "images/portfolio/anthony-portfolio-thumb.jpg",
     liveUrl: "https://anthonybturner-next.vercel.app/",
     type: 'demo'
   },
    {
      id: 3,
      name: "Personal Portfolio Website (angular) alternative",
      description: "My personal portfolio showcasing projects, skills, and experience. Clean, modern design built with responsive web technologies.",
      image: "images/portfolio/software-dev-portfolio-thumb.jpg",
      liveUrl: "https://anthonybturner.vercel.app/",
      sourceUrl: "https://github.com/anthonybturner/software-dev-portfolio",
      type: 'demo',
      wip: true
    },
  ];
}

