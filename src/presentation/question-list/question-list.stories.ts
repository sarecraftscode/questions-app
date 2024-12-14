import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { expect, userEvent, within } from '@storybook/test';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const mockQuestionState = createMockQuestionState();
    await resetState(mockQuestionState);
    await loadQuestionsWithCategory(mockQuestionState);

    await userEvent.click(canvas.getByText('10 Questions'));
    await userEvent.click(canvas.getByText('Software Craftsmanship'));
    await userEvent.click(canvas.getByText('Correct'));

    await expect(canvas.getByText('✓ Answered correctly')).toBeInTheDocument();
  },
};
