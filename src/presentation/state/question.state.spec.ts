import { of } from 'rxjs';
import { Question } from 'src/domain/entities/question.entity';
import { GetQuestionsByCategoryUseCase } from 'src/domain/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from 'src/domain/use-cases/mark-questions-answered.use-case';
import { beforeEach, describe, expect, it } from 'vitest';
import { QuestionState } from './question.state';

describe('QuestionState', () => {
  let questionState: QuestionState;
  let getQuestionsByCategoryUseCase: GetQuestionsByCategoryUseCase;
  let markQuestionAnsweredUseCase: MarkQuestionAnsweredUseCase;

  beforeEach(() => {
    getQuestionsByCategoryUseCase = {
      execute: (categoryId: string) => of([]),
    } as any;
    markQuestionAnsweredUseCase = {
      execute: (id: number, isCorrect: boolean) => Promise.resolve(),
    } as any;
    questionState = new QuestionState(
      getQuestionsByCategoryUseCase,
      markQuestionAnsweredUseCase,
    );
  });

  it('should load questions and set the initial state', async () => {
    const questions: Question[] = [
      { id: 1, text: 'Question 1', isAnswered: false, isCorrect: false },
      { id: 2, text: 'Question 2', isAnswered: false, isCorrect: false },
    ];
    getQuestionsByCategoryUseCase.execute = () => of(questions);

    await questionState.loadQuestions('category1', 2);

    expect(questionState.questions()).toEqual(questions);
    expect(questionState.selectedCategory()).toBe('category1');
    expect(questionState.currentIndex()).toBe(0);
  });

  it('should mark a question as answered', async () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'Question 1',
        category: 'software-craftmanship',
        isAnswered: false,
        isCorrect: false,
      },
    ];
    getQuestionsByCategoryUseCase.execute = () => of(questions);

    await questionState.loadQuestions('category1', 1);
    await questionState.answerQuestion(1, true);

    expect(questionState.questions()[0].isAnswered).toBe(true);
    expect(questionState.questions()[0].isCorrect).toBe(true);
  });

  it('should reset the category and questions', () => {
    questionState.resetCategory();

    expect(questionState.selectedCategory()).toBe(null);
    expect(questionState.questions()).toEqual([]);
    expect(questionState.currentIndex()).toBe(0);
  });

  it('should go to the next question', async () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'Question 1',
        category: 'software-craftmanship',
        isAnswered: false,
        isCorrect: false,
      },
      {
        id: 2,
        text: 'Question 2',
        category: 'software-craftmanship',
        isAnswered: false,
        isCorrect: false,
      },
    ];
    getQuestionsByCategoryUseCase.execute = () => of(questions);

    await questionState.loadQuestions('category1', 2);
    questionState.nextQuestion();

    expect(questionState.currentIndex()).toBe(1);
  });

  it('should go to the previous question', async () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'Question 1',
        category: 'software-craftmanship',
        isAnswered: false,
        isCorrect: false,
      },
      {
        id: 2,
        text: 'Question 2',
        category: 'software-craftmanship',
        isAnswered: false,
        isCorrect: false,
      },
    ];
    getQuestionsByCategoryUseCase.execute = () => of(questions);

    await questionState.loadQuestions('category1', 2);
    questionState.nextQuestion();
    questionState.previousQuestion();

    expect(questionState.currentIndex()).toBe(0);
  });

  it('should calculate the progress percentage', async () => {
    const questions: Question[] = [
      {
        id: 1,
        text: 'Question 1',
        category: 'software-craftmanship',
        isAnswered: true,
        isCorrect: true,
      },
      {
        id: 2,
        text: 'Question 2',
        category: 'software-craftmanship',
        isAnswered: false,
        isCorrect: false,
      },
    ];
    getQuestionsByCategoryUseCase.execute = () => of(questions);

    await questionState.loadQuestions('category1', 2);

    expect(questionState.progressPercentage()).toBe(50);
  });
});
