import { of } from 'rxjs';
import { QuestionState } from 'src/app/state/question.state';
import { GetQuestionsByCategoryUseCase } from 'src/domain/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from 'src/domain/use-cases/mark-questions-answered.use-case';
import { mockQuestions } from './mock-data';

export function createMockQuestionState(): QuestionState {
  const mockGetQuestionsByCategoryUseCase = {
    execute: (category: string) =>
      of(mockQuestions.filter((q) => q.category === category)),
  } as GetQuestionsByCategoryUseCase;

  const mockMarkQuestionAnsweredUseCase = {
    execute: (id: number, isCorrect: boolean) => of(void 0),
  } as MarkQuestionAnsweredUseCase;

  return new QuestionState(
    mockGetQuestionsByCategoryUseCase,
    mockMarkQuestionAnsweredUseCase,
  );
}
