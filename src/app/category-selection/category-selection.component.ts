import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CATEGORIES, QUESTION_COUNT_OPTIONS, Category } from '../core/models/category.model';

@Component({
    selector: 'app-category-selection',
    templateUrl: './category-selection.component.html',
    standalone: true,
    imports: [NgFor, NgIf],
})
export class CategorySelectionComponent {
  categories = CATEGORIES;
  questionCountOptions = QUESTION_COUNT_OPTIONS;
  selectedQuestionCount: number | null = null;

  @Output() categorySelected = new EventEmitter<{categoryId: string, questionCount: number}>();

  selectQuestionCount(count: number) {
    this.selectedQuestionCount = count;
  }

  onCategorySelect(category: Category) {
    if (this.selectedQuestionCount) {
      this.categorySelected.emit({
        categoryId: category.id,
        questionCount: this.selectedQuestionCount
      });
    }
  }

  getQuestionCountButtonClass(count: number): string {
    const baseClass = 'px-4 py-2 rounded-lg transition-colors text-center';
    return count === this.selectedQuestionCount
      ? `${baseClass} bg-blue-600 text-white`
      : `${baseClass} bg-gray-100 hover:bg-gray-200 text-gray-800`;
  }

  getCategoryCardClass(): string {
    const baseClass = 'p-6 bg-white rounded-lg shadow-md transition-all';
    return this.selectedQuestionCount
      ? `${baseClass} hover:shadow-lg cursor-pointer`
      : `${baseClass} opacity-50 cursor-not-allowed`;
  }
}
