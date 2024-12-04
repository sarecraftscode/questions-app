import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionRepositoryImpl } from 'src/app/infrastructure/repositories/question.repository.impl';
import { QuestionRepository } from 'src/app/core/repositories/question.repository';
import { ProgressBarComponent } from './question-list/progress-bar/progress-bar.component';
import { QuestionCardComponent } from './question-list/question-card/question-card.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { QuestionViewerComponent } from './question-viewer/question-viewer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

export const IQuestionRepository = new InjectionToken<QuestionRepository>('QuestionRepository');


