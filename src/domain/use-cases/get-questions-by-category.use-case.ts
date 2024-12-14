import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestionRepository } from 'src/main';
import { Question } from '../entities/question.entity';
import { QuestionRepository } from '../repositories/question.repository';

@Injectable({
  providedIn: 'root',
})
export class GetQuestionsByCategoryUseCase {
  constructor(
    @Inject(IQuestionRepository) private questionRepository: QuestionRepository,
  ) {}

  execute(category: string): Observable<Question[]> {
    return this.questionRepository.getQuestionsByCategory(category);
  }
}
