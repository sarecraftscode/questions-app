import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../domain/entities/question.entity';

@Component({
  selector: 'app-question-viewer',
  templateUrl: './question-viewer.component.html',
  standalone: true,
  imports: [NgIf, NgClass],
})
export class QuestionViewerComponent {
  @Input() questions: Question[] = [];
  @Input() currentIndex = 0;
  @Output() answered = new EventEmitter<{ id: number; isCorrect: boolean }>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  get currentQuestion(): Question | undefined {
    return this.questions[this.currentIndex];
  }

  onAnswer(isCorrect: boolean) {
    if (this.currentQuestion) {
      this.answered.emit({ id: this.currentQuestion.id, isCorrect });
    }
  }
}
