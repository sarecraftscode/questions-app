import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategorySelectionComponent } from '../category-selection/category-selection.component';
import { QuestionViewerComponent } from '../question-viewer/question-viewer.component';
import { QuestionState } from '../state/question.state';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  standalone: true,
  imports: [
    NgIf,
    CategorySelectionComponent,
    QuestionViewerComponent,
    ProgressBarComponent,
  ],
})
export class QuestionListComponent {
  protected state = inject(QuestionState);

  async onCategorySelected(event: {
    categoryId: string;
    questionCount: number;
  }) {
    await this.state.loadQuestions(event.categoryId, event.questionCount);
  }

  async onQuestionAnswered(event: { id: number; isCorrect: boolean }) {
    await this.state.answerQuestion(event.id, event.isCorrect);
  }
}
