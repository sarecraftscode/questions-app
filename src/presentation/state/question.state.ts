import { computed, Injectable, signal } from '@angular/core';
import { Question } from 'src/domain/entities/question.entity';
import { GetQuestionsByCategoryUseCase } from 'src/domain/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from 'src/domain/use-cases/mark-questions-answered.use-case';

@Injectable({
  providedIn: 'root',
})
export class QuestionState {
  private questionsSignal = signal<Question[]>([]);
  private selectedCategorySignal = signal<string | null>(null);
  private currentIndexSignal = signal<number>(0);

  questions = computed(() => this.questionsSignal());
  selectedCategory = computed(() => this.selectedCategorySignal());
  currentIndex = computed(() => this.currentIndexSignal());

  currentQuestion = computed(() => {
    const questions = this.questions();
    const index = this.currentIndex();
    return questions[index];
  });

  answeredCount = computed(
    () => this.questions().filter((q) => q.isAnswered).length,
  );

  totalQuestions = computed(() => this.questions().length);

  progressPercentage = computed(
    () => (this.answeredCount() / this.totalQuestions()) * 100,
  );

  constructor(
    private getQuestionsByCategoryUseCase: GetQuestionsByCategoryUseCase,
    private markQuestionAnsweredUseCase: MarkQuestionAnsweredUseCase,
  ) {}

  async loadQuestions(
    categoryId: string,
    questionCount: number,
  ): Promise<void> {
    this.selectedCategorySignal.set(categoryId);
    await this.getQuestionsByCategoryUseCase
      .execute(categoryId)
      .subscribe((questions: Question[]) => {
        this.questionsSignal.set(questions.slice(0, questionCount));
        this.currentIndexSignal.set(0);
      });
  }

  async answerQuestion(id: number, isCorrect: boolean): Promise<void> {
    await this.markQuestionAnsweredUseCase.execute(id, isCorrect);

    const updatedQuestions = this.questions().map((q) =>
      q.id === id ? { ...q, isAnswered: true, isCorrect } : q,
    );
    this.questionsSignal.set(updatedQuestions);
  }

  resetCategory(): void {
    this.selectedCategorySignal.set(null);
    this.questionsSignal.set([]);
    this.currentIndexSignal.set(0);
  }

  nextQuestion(): void {
    if (this.currentIndex() < this.totalQuestions() - 1) {
      this.currentIndexSignal.update((index) => index + 1);
    }
  }

  previousQuestion(): void {
    if (this.currentIndex() > 0) {
      this.currentIndexSignal.update((index) => index - 1);
    }
  }
}
