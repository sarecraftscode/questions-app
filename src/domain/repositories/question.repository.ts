import { Observable } from 'rxjs';
import { Question } from '../entities/question.entity';

export interface QuestionRepository {
  getQuestions(): Observable<Question[]>;
  getQuestionsByCategory(category: string): Observable<Question[]>;
  markAsAnswered(id: number, isCorrect: boolean): Observable<void>;
  getCategories(): Observable<string[]>;
}
