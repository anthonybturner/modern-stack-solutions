import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.html',
  styleUrl: 'home.scss',
})
export class Home {
  constructor(private router:Router){}

  GotoContact(): void{
    this.router.navigate(['/contact']);
  }
}
