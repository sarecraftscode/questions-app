import { Routes } from "@angular/router";
import { LandingPageComponent } from "./app/landing-page/landing-page.component";
import { QuestionListComponent } from "./app/question-list/question-list.component";
import { PricingPageComponent } from "./app/pricing-page/pricing-page.component";

export const APP_ROUTES: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'pricing', component: PricingPageComponent },
];
