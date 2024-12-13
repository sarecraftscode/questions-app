import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestionRepository } from 'src/presentation/app.module';
import { Question } from '../entities/question.entity';
import { QuestionRepository } from '../repositories/question.repository';

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
