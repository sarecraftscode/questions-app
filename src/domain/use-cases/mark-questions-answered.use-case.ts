import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionRepository } from '../repositories/question.repository';
import { IQuestionRepository } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class MarkQuestionAnsweredUseCase {
  constructor(@Inject(IQuestionRepository) private questionRepository: QuestionRepository) {}

  execute(id: number, isCorrect: boolean): Observable<void> {
    return this.questionRepository.markAsAnswered(id, isCorrect);
  }
}
