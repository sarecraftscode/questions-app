
import { IQuestionRepository } from './presentation/app.module';
import { AppComponent } from './presentation/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { QuestionRepositoryImpl } from 'src/infrastructure/repositories/question.repository.impl';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideRouter(APP_ROUTES),
        { provide: IQuestionRepository, useValue: new QuestionRepositoryImpl() }
    ]
})
  .catch(err => console.error(err));
