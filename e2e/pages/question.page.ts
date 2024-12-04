import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class QuestionsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  readonly questionCountButton = (count: number) =>
    this.page.getByRole('button', { name: `${count} Questions` });
  readonly categoryHeading = (category: string) =>
    this.page.getByRole('heading', { name: category });
  readonly previousButton = () =>
    this.page.getByRole('button', { name: '← Previous' });
  readonly nextButton = () =>
    this.page.getByRole('button', { name: 'Next →' });
  readonly correctButton = () =>
    this.page.getByRole('button', { name: 'Correct' });
  readonly incorrectButton = () =>
    this.page.getByRole('button', { name: 'Incorrect' });
  readonly backToCategoriesButton = () =>
    this.page.getByRole('button', { name: '← Back to Categories' });

  // Actions
  async selectQuestionCount(count: number) {
    await this.questionCountButton(count).click();
  }

  async selectCategory(category: string) {
    await this.categoryHeading(category).click();
  }

  async answerQuestion(correct: boolean) {
    if (correct) {
      await this.correctButton().click();
    } else {
      await this.incorrectButton().click();
    }
  }

  async goToNextQuestion() {
    await this.nextButton().click();
  }

  async goToPreviousQuestion() {
    await this.previousButton().click();
  }

  async returnToCategories() {
    await this.backToCategoriesButton().click();
  }

  // Assertions
  async expectQuestionNumber(current: number, total: number) {
    await expect(this.page.getByText(`Question ${current} of ${total}`))
      .toBeVisible();
  }

  async expectProgress(answered: number, total: number) {
    await expect(this.page.getByText(`Progress: ${answered}/${total} questions`))
      .toBeVisible();
  }

  async expectPreviousButtonState(disabled: boolean) {
    if (disabled) {
      await expect(this.previousButton()).toBeDisabled();
    } else {
      await expect(this.previousButton()).toBeEnabled();
    }
  }
}
