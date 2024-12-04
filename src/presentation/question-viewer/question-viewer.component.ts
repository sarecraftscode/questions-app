import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { Question } from '../../domain/entities/question.entity';

@Component({
    selector: 'app-question-viewer',
    templateUrl: './question-viewer.component.html',
    standalone: true,
    imports: [NgIf, NgClass],
})
export class QuestionViewerComponent {
  @Input() questions: Question[] = [];
  @Output() answered = new EventEmitter<{ id: number; isCorrect: boolean }>();

  currentIndex = 0;

  get currentQuestion(): Question | undefined {
    return this.questions[this.currentIndex];
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  onAnswer(isCorrect: boolean) {
    if (this.currentQuestion) {
      this.answered.emit({ id: this.currentQuestion.id, isCorrect });
    }
  }
}
