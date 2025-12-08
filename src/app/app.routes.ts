import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { Services } from './pages/services/services';
import { PortfolioSection } from './pages/portfolio/portfolio-section.component';
import { Contact } from './pages/contact/contact';

const routeConfig: Routes = [
    { path: '', component: Home, title: 'Modern Stack Solutions' },
    { path: 'portfolio', component: PortfolioSection, title: 'Modern Stack S - Portfolio' },
    { path: 'pricing', component: Pricing, title: 'Modern Stack S - Pricing' },
    { path: 'proposal', component: ProposalComponent, title: 'Modern Stack S - Proposal' },
    { path: 'questionnaire', component: QuestionnaireComponent, title: 'Modern Stack S - Questionnaire' },
    { path: 'contact', component: Contact, title: 'Modern Stack S - Contact' },
    { path: 'services', component: Services , title: 'Modern Stack S - Services' },

    { path: '**', redirectTo: '' },
];

export default routeConfig;