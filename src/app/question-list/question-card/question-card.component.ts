import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/core/entities/question.entity';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
})
export class QuestionCardComponent {
  @Input() question!: Question;
  @Output() answered = new EventEmitter<{ id: number; isCorrect: boolean }>();

  onAnswer(isCorrect: boolean) {
    this.answered.emit({ id: this.question.id, isCorrect });
  }

  getStatusClass(): string {
    if (!this.question.isAnswered) {
      return 'bg-blue-100 text-blue-800';
    }
    return this.question.isCorrect
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  }
}
