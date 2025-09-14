import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
  imports: [CommonModule, FormsModule],
})

export class Pricing {

  baseProjects = [
    { name: 'Informational Website (5–7 pages)', min: 2000, max: 5000 },
    { name: 'Simple Web App (login, dashboard, 1 integration)', min: 5000, max: 10000 },
    { name: 'Advanced Web App (multi-user, reports, payments, multiple integrations)', min: 10000, max: 25000 }
  ];

  features = [
    { name: 'User authentication / roles', min: 500, max: 1000 },
    { name: 'Payment gateway (Stripe, PayPal)', min: 500, max: 1500 },
    { name: 'API integration (CRM, POS, external services)', min: 500, max: 2000 },
    { name: 'Reports / dashboards', min: 1000, max: 3000 },
    { name: 'Custom UI/UX design', min: 1000, max: 3000 },
    { name: 'Mobile optimization / responsive design', min: 500, max: 1500 }
  ];

  result: any = null;

  estimate(baseIndex: number, extraScreens: number) {
    let base = this.baseProjects[Number(baseIndex)];
    let min = base.min + Number(extraScreens) * 200;
    let max = base.max + Number(extraScreens) * 500;
    // read checkboxes directly from DOM (simple approach) - assume features selected by global checkboxes
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((cb, idx) => {
      if ((cb as HTMLInputElement).checked) {
        const feat = this.features[idx];
        min += feat.min; max += feat.max;
      }
    });
    // add buffer 10%
    this.result = { min: Math.round(min * 1.1), max: Math.round(max * 1.1) };

  }

}

