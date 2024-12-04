import { describe, it, expect, beforeEach } from 'vitest';
import { QuestionListComponent } from './question-list.component';
import { of } from 'rxjs';
import { GetQuestionsUseCase } from 'src/app/core/use-cases/get-questions.use-case';
import { QuestionImpl } from 'src/app/core/entities/question.entity';

describe('QuestionListComponent', () => {
  let component: QuestionListComponent;
  let mockGetQuestionsUseCase: GetQuestionsUseCase;

  beforeEach(() => {
    const mockQuestions = [
      new QuestionImpl(1, 'Test Question 1', 'Category 1', false),
      new QuestionImpl(2, 'Test Question 2', 'Category 2', true)
    ];

    mockGetQuestionsUseCase = {
      execute: () => of(mockQuestions)
    } as GetQuestionsUseCase;

    component = new QuestionListComponent(mockGetQuestionsUseCase);
  });

  it('should calculate progress correctly', () => {
    component.ngOnInit();
    expect(component.progressPercentage).toBe(50);
    expect(component.answeredCount).toBe(1);
    expect(component.totalQuestions).toBe(2);
  });
});
