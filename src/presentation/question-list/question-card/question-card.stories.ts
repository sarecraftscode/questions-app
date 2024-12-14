import type { Meta, StoryObj } from '@storybook/angular';
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
};
