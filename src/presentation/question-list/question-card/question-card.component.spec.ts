import { describe, it, expect } from 'vitest';
import { QuestionCardComponent } from './question-card.component';
import { QuestionImpl } from 'src/domain/entities/question.entity';

describe('QuestionCardComponent', () => {
  it('should create with question input', () => {
    const component = new QuestionCardComponent();
    const question = new QuestionImpl(1, 'Test Question', 'Category', false);
    component.question = question;

    expect(component.question).toBe(question);
  });
});
