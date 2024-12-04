import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IQuestionRepository } from './app/app.module';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { QuestionRepositoryImpl } from 'src/app/infrastructure/repositories/question.repository.impl';
import { QuestionRepository } from 'src/app/core/repositories/question.repository';
import { InjectionToken, importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule),
        { provide: IQuestionRepository, useValue: new QuestionRepositoryImpl() }
    ]
})
  .catch(err => console.error(err));
