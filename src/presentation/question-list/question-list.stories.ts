import type { Meta, StoryObj } from '@storybook/angular';
import { QuestionListComponent } from './question-list.component';
import { of } from 'rxjs';
import { Question } from '../../domain/entities/question.entity';

const mockQuestions = [
  new Question(1, 'What is Clean Architecture?', 'Software Craftsmanship', false),
  new Question(2, 'Explain Dependency Injection', 'Backend Development', true),
  new Question(3, 'What are Web Components?', 'Frontend Development', false),
];

const meta: Meta<QuestionListComponent> = {
  title: 'Components/QuestionList',
  component: QuestionListComponent,
  providers: [
    {
      provide: GetQuestionsUseCase,
      useValue: { execute: () => of(mockQuestions) }
    }
  ]
};

export default meta;
type Story = StoryObj<QuestionListComponent>;

export const Default: Story = {};
