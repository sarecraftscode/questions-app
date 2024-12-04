import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from 'src/app/core/entities/question.entity';
import { generateQuestions } from './questions-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionRepositoryImpl implements QuestionRepositoryImpl {
  private questions: Question[] = generateQuestions();

  getQuestionsByCategory(category: string): Observable<Question[]> {
    return of(this.questions.filter(q => q.category === category));
  }

  markAsAnswered(id: number, isCorrect: boolean): Observable<void> {
    const question = this.questions.find(q => q.id === id);
    if (question) {
      question.isAnswered = true;
      question.isCorrect = isCorrect;
    }
    return of(void 0);
  }

  getCategories(): Observable<string[]> {
    return of([...new Set(this.questions.map(q => q.category))]);
  }
}
