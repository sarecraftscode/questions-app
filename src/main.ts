
import { AppComponent } from './presentation/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { InjectionToken } from "@angular/core";
import { QuestionRepository } from './domain/repositories/question.repository';
import { QuestionRepositoryInMemory } from './infrastructure/repositories/question.repository.in.memory';


export const IQuestionRepository = new InjectionToken<QuestionRepository>('QuestionRepository');

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideRouter(APP_ROUTES),
        { provide: IQuestionRepository, useValue: new QuestionRepositoryInMemory() }
    ]
})
  .catch(err => console.error(err));
