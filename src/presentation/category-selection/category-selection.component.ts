import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CATEGORIES, QUESTION_COUNT_OPTIONS, Category } from '../../app/core/models/category.model';

@Component({
  selector: 'app-category-selection',
  template: `
    <div class="space-y-8">
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Choose number of questions you want for today ?</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button *ngFor="let option of questionCountOptions"
                  (click)="selectQuestionCount(option.value)"
                  [class]="getQuestionCountButtonClass(option.value)">
            {{ option.label }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div *ngFor="let category of categories"
             (click)="onCategorySelect(category)"
             [class]="getCategoryCardClass()">
          <h3 class="text-xl font-semibold mb-2">{{ category.name }}</h3>
          <p class="text-gray-600">{{ category.description }}</p>
          <div class="mt-4 text-sm text-gray-500" *ngIf="selectedQuestionCount">
            Selected: {{ selectedQuestionCount }} questions
          </div>
        </div>
      </div>
    </div>
  `
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
