import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SubmitWeekComponent } from './component/submit-week/submit-week.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'submit', component: SubmitWeekComponent }
];
