import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home-section',
  imports: [CommonModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.scss'
})
export class HomeSection {

  @Input() sectionName: string = "";
  @Input() sectionImage: string = "";
  @Input() sectionTitle: string ="";
  @Input() sectionDescription: string = "";
  



  projects: Project[] = [
    {
      id: 0,
      name: "Rivals Pulse",
      description: "",
      image: "/assets/images/rivals-pulse.png"
    }
  ];
}
