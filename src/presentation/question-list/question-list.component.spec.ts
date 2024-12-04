import { describe, it, expect, beforeEach } from 'vitest';
import { QuestionListComponent } from './question-list.component';
import { of } from 'rxjs';
import { GetQuestionsByCategoryUseCase } from '../../domain/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from '../../domain/use-cases/mark-questions-answered.use-case';
import { Question } from '../../domain/entities/question.entity';

describe('QuestionListComponent', () => {
  let component: QuestionListComponent;
  let mockMarkQuestionAnsweredUseCase: MarkQuestionAnsweredUseCase;
  let mockGetQuestionsByCategoryUseCase: GetQuestionsByCategoryUseCase;

  beforeEach(() => {
    const mockQuestions = [
      new Question(1, 'Test Question 1', 'Category 1', false),
      new Question(2, 'Test Question 2', 'Category 2', true)
    ];

    mockMarkQuestionAnsweredUseCase = {
      execute: (id: number, isCorrect: boolean) => of(void 0)
    } as MarkQuestionAnsweredUseCase;

    mockGetQuestionsByCategoryUseCase = {
      execute: (category: string) => of(mockQuestions)
    } as GetQuestionsByCategoryUseCase;

    component = new QuestionListComponent(mockGetQuestionsByCategoryUseCase, mockMarkQuestionAnsweredUseCase);
  });

  it('should calculate progress correctly', () => {
    expect(component.progressPercentage).toBe(50);
    expect(component.answeredCount).toBe(1);
    expect(component.totalQuestions).toBe(2);
  });
});
