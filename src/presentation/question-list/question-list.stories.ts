import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { QuestionState } from '../state/question.state';
import { QuestionListComponent } from './question-list.component';
import { createMockQuestionState } from './testing/mock-state';
import { loadQuestionsWithCategory, resetState } from './testing/story-actions';

const meta: Meta<QuestionListComponent> = {
  title: 'Components/QuestionList',
  component: QuestionListComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: QuestionState,
          useFactory: () => createMockQuestionState(),
        },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<QuestionListComponent>;

export const Initial: Story = {};

export const WithCategory: Story = {
  play: async () => {
    const mockQuestionState = createMockQuestionState();
    await resetState(mockQuestionState);
    await loadQuestionsWithCategory(mockQuestionState);
  },
};
