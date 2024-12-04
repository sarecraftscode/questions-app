import type { Meta, StoryObj } from '@storybook/angular';
import { QuestionCardComponent } from './question-card.component';
import { QuestionImpl } from 'src/app/core/entities/question.entity';

const meta: Meta<QuestionCardComponent> = {
  title: 'Components/QuestionCard',
  component: QuestionCardComponent,
  args: {
    question: new QuestionImpl(
      1,
      'What is Clean Architecture?',
      'Software Craftsmanship',
      false
    )
  }
};

export default meta;
type Story = StoryObj<QuestionCardComponent>;

export const Unanswered: Story = {};

export const Answered: Story = {
  args: {
    question: new QuestionImpl(
      2,
      'Explain Dependency Injection',
      'Backend Development',
      true
    )
  }
};
