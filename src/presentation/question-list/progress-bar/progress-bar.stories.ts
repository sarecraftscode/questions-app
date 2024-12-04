import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
  title: 'Components/ProgressBar',
  component: ProgressBarComponent
};

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const Empty: Story = {
  args: {
    current: 0,
    total: 5,
    percentage: 0
  }
};

export const HalfComplete: Story = {
  args: {
    current: 2,
    total: 4,
    percentage: 50
  }
};

export const Complete: Story = {
  args: {
    current: 5,
    total: 5,
    percentage: 100
  }
};
