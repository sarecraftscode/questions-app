import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../app/core/entities/question.entity';
import { GetQuestionsByCategoryUseCase } from '../../app/core/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from '../../app/core/use-cases/mark-questions-answered.use-case';

@Component({
  selector: 'app-question-list',
  template: `
    <div class="container mx-auto px-4 py-8">
      <div *ngIf="!selectedCategory" class="mb-8">
        <h2 class="text-2xl font-bold mb-6">Select a Category</h2>
        <app-category-selection
          (categorySelected)="onCategorySelected($event)">
        </app-category-selection>
      </div>

      <div *ngIf="selectedCategory && questions.length > 0">
        <div class="mb-8">
          <button
            (click)="resetCategory()"
            class="text-blue-600 hover:text-blue-800">
            ← Back to Categories
          </button>
        </div>

        <app-question-viewer
          [questions]="questions"
          (answered)="onQuestionAnswered($event)">
        </app-question-viewer>

        <app-progress-bar
          [current]="answeredCount"
          [total]="totalQuestions"
          [percentage]="progressPercentage">
        </app-progress-bar>
      </div>
    </div>
  `
})
export class QuestionListComponent {
  selectedCategory: string | null = null;
  questions: Question[] = [];

  get answeredCount(): number {
    return this.questions.filter(q => q.isAnswered).length;
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  get progressPercentage(): number {
    return (this.answeredCount / this.totalQuestions) * 100;
  }

  constructor(
    private getQuestionsByCategoryUseCase: GetQuestionsByCategoryUseCase,
    private markQuestionAnsweredUseCase: MarkQuestionAnsweredUseCase
  ) {}

  onCategorySelected(event: {categoryId: string, questionCount: number}) {
    this.selectedCategory = event.categoryId;
    this.getQuestionsByCategoryUseCase.execute(event.categoryId).subscribe(
      questions => {
        this.questions = questions.slice(0, event.questionCount);
      }
    );
  }

  resetCategory() {
    this.selectedCategory = null;
    this.questions = [];
  }

  onQuestionAnswered(event: { id: number; isCorrect: boolean }) {
    this.markQuestionAnsweredUseCase.execute(event.id, event.isCorrect)
      .subscribe(() => {
        const question = this.questions.find(q => q.id === event.id);
        if (question) {
          question.isAnswered = true;
          question.isCorrect = event.isCorrect;
        }
      });
  }
}
