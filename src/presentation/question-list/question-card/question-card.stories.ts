import type { Meta, StoryObj } from '@storybook/angular';
import { expect, within } from '@storybook/test';
import { Question } from 'src/domain/entities/question.entity';
import { QuestionCardComponent } from './question-card.component';

const meta: Meta<QuestionCardComponent> = {
  title: 'Components/QuestionCard',
  component: QuestionCardComponent,
  args: {
    question: new Question(
      1,
      'What is Clean Architecture?',
      'Software Craftsmanship',
      false,
    ),
  },
};

export default meta;
type Story = StoryObj<QuestionCardComponent>;

export const Unanswered: Story = {
  args: {
    question: new Question(
      2,
      'Explain Dependency Injection',
      'Backend Development',
      false,
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Correct Answer')).toBeInTheDocument();
    await expect(canvas.getByText('Incorrect Answer')).toBeInTheDocument();
  },
};

export const AnsweredIncorretly: Story = {
  args: {
    question: new Question(
      2,
      'Explain Dependency Injection',
      'Backend Development',
      true,
      false,
    ),
  },
};

export const AnsweredCorrectly: Story = {
  args: {
    question: new Question(
      2,
      'Explain Dependency Injection',
      'Backend Development',
      true,
      true,
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('✓ Answered correctly')).toBeInTheDocument();
  },
};
