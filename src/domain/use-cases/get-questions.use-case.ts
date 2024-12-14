import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../entities/question.entity';
import { QuestionRepository } from '../repositories/question.repository';
import { IQuestionRepository } from 'src/main';

@Injectable({
  providedIn: 'root',
})
export class GetQuestionsUseCase {
  constructor(
    @Inject(IQuestionRepository) private questionRepository: QuestionRepository,
  ) {}

  execute(): Observable<Question[]> {
    return this.questionRepository.getQuestions();
  }
}
