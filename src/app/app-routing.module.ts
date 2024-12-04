import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { QuestionListComponent } from './question-list/question-list.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'pricing', component: PricingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
