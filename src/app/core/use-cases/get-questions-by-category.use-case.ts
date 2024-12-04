import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionRepository } from '../repositories/question.repository';
import { Question } from '../entities/question.entity';
import { IQuestionRepository } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsByCategoryUseCase {
  constructor(@Inject(IQuestionRepository) private questionRepository: QuestionRepository) {}

  execute(category: string): Observable<Question[]> {
    return this.questionRepository.getQuestionsByCategory(category);
  }
}
