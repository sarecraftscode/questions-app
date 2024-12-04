import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { CategorySelectionComponent } from '../category-selection/category-selection.component';
import { QuestionViewerComponent } from '../question-viewer/question-viewer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { Question } from '../core/entities/question.entity';
import { GetQuestionsByCategoryUseCase } from '../core/use-cases/get-questions-by-category.use-case';
import { MarkQuestionAnsweredUseCase } from '../core/use-cases/mark-questions-answered.use-case';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    standalone: true,
    imports: [NgIf, CategorySelectionComponent, QuestionViewerComponent, ProgressBarComponent]
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
