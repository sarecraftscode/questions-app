import { Routes } from "@angular/router";
import { LandingPageComponent } from "./presentation/landing-page/landing-page.component";
import { QuestionListComponent } from "./presentation/question-list/question-list.component";
import { PricingPageComponent } from "./presentation/pricing-page/pricing-page.component";

export const APP_ROUTES: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'pricing', component: PricingPageComponent },
];
