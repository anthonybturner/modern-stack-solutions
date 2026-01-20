import { Component, computed } from '@angular/core';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: 'services.html',
  styleUrl: 'services.scss',
})
export class Services {
  primaryServices = computed(()=>{ return [
    {
      title: 'Custom Web Applications',
      description: 'Angular + .NET solutions tailored to your needs.',
      icon: '💻',
      image: 'images/services/web-app.jpg',
    },
    {
      title: 'API Integrations',
      description: 'Stripe, QuickBooks, CRMs, and more.',
      icon: '🔗',
      image: 'images/services/api.jpg',
    },
    {
      title: 'Maintenance & Hosting',
      description: 'Reliable support and scalable hosting services.',
      icon: '🛠️',
      image: 'images/services/hosting.jpg',
    },
    {
      title: 'UI/UX Design',
      description: 'Modern design and interactive prototyping.',
      icon: '🎨',
      image: 'images/services/design.jpg',
    },
    {
      title: 'Onsite Training',
      description: 'Comprehensive documentation and team training.',
      icon: '📚',
      image: 'images/services/training.jpg',
    },
  ]});

  additionalService = computed(()=>{ return [
    {
      title: 'Web Development',
      description: 'Custom websites and web apps tailored to your needs.',
      icon: '💻',
    },
    {
      title: 'Mobile Solutions',
      description: 'Responsive and engaging mobile experiences.',
      icon: '📱',
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless cloud services for scalability and reliability.',
      icon: '☁️',
    },
    {
      title: 'Game Development',
      description: 'Unity and Unreal Engine game applications and integrations.',
      icon: '🎮',
    },
  ]});
}
