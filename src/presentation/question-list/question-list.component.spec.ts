import { fireEvent, render, screen } from '@testing-library/angular';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Question } from '../../domain/entities/question.entity';
import { GetQuestionsByCategoryUseCase } from '../../domain/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from '../../domain/use-cases/mark-questions-answered.use-case';
import { QuestionState } from '../state/question.state';
import { QuestionListComponent } from './question-list.component';

describe('QuestionListComponent', () => {
  let component: QuestionListComponent;
  let mockMarkQuestionAnsweredUseCase: MarkQuestionAnsweredUseCase;
  let mockGetQuestionsByCategoryUseCase: GetQuestionsByCategoryUseCase;

  beforeEach(() => {
    const mockQuestions = [
      new Question(1, 'Test Question 1', 'Category 1', false),
      new Question(2, 'Test Question 2', 'Category 2', true),
    ];

    mockMarkQuestionAnsweredUseCase = {
      execute: vi.fn().mockReturnValue(of(void 0)),
    } as unknown as MarkQuestionAnsweredUseCase;

    mockGetQuestionsByCategoryUseCase = {
      execute: vi.fn().mockReturnValue(of(mockQuestions)),
    } as unknown as GetQuestionsByCategoryUseCase;

    component = new QuestionListComponent();
  });
});

describe('QuestionListComponent with QuestionState', () => {
  let mockQuestionState: QuestionState;

  beforeEach(async () => {
    mockQuestionState = {
      loadQuestions: vi.fn().mockReturnValue(of(void 0)),
      answerQuestion: vi.fn().mockReturnValue(of(void 0)),
    } as unknown as QuestionState;

    await render(QuestionListComponent, {
      providers: [{ provide: QuestionState, useValue: mockQuestionState }],
    });
  });

  it('should call loadQuestions on category selection', async () => {
    const categorySelectionEvent = { categoryId: '1', questionCount: 10 };
    const categorySelectionComponent = screen.getByTestId('category-selection');

    fireEvent(
      categorySelectionComponent,
      new CustomEvent('categorySelected', { detail: categorySelectionEvent }),
    );

    expect(mockQuestionState.loadQuestions).toHaveBeenCalledWith('1', 10);
  });

  it('should call answerQuestion on question answered', async () => {
    const questionAnsweredEvent = { id: 1, isCorrect: true };
    const questionViewerComponent = screen.getByTestId('question-viewer');

    fireEvent(
      questionViewerComponent,
      new CustomEvent('questionAnswered', { detail: questionAnsweredEvent }),
    );

    expect(mockQuestionState.answerQuestion).toHaveBeenCalledWith(1, true);
  });
});
