import { render, screen } from '@testing-library/angular';
import { Question } from 'src/domain/entities/question.entity';
import { describe, expect, it } from 'vitest';
import { QuestionCardComponent } from './question-card.component';

describe('QuestionCardComponent', () => {
  it('should create with question input', async () => {
    const question = new Question(1, 'Test Question', 'Category', false);

    await render(QuestionCardComponent, {
      componentProperties: { question },
    });

    const questionElement = screen.getByText('Test Question');
    expect(questionElement).toBeTruthy();
  });
});
