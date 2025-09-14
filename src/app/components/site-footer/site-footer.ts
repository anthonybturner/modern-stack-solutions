import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.html',
  styleUrls: ['./site-footer.scss'],
  imports:[RouterModule],
  standalone: true,
})
export class SiteFooter {
  currentYear: number = new Date().getFullYear();
}