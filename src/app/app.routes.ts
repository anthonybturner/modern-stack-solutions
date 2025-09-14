import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { Services } from './pages/services/services';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Contact } from './pages/contact/contact';

const routeConfig: Routes = [
    { path: '', component: Home },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'pricing', component: Pricing },
    { path: 'proposal', component: ProposalComponent },
    { path: 'questionnaire', component: QuestionnaireComponent },
    { path: 'contact', component: Contact},
    { path: 'services', component: Services },

    { path: '**', redirectTo: '' },
];

export default routeConfig;