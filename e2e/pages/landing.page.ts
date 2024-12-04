import { BasePage } from "./base.page";
import { Page } from '@playwright/test';
import { expect } from '@playwright/test';


export class LandingPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Locators
  readonly mainHeading = () => this.page.getByRole('heading', {
    name: 'Exercice Your Technical Interviews'
  });
  readonly startPracticingButton = () => this.page.getByRole('link', {
    name: 'Start Practicing'
  });
  readonly practiceLink = () => this.page.getByRole('link', { name: 'Practice' });
  readonly pricingLink = () => this.page.getByRole('link', { name: 'Pricing' });

 // Actions
 async navigateToQuestions() {
  await this.practiceLink().click();
}

async navigateToPricing() {
  await this.pricingLink().click();
}

async getCategoryHeading(category: string) {
  return this.page.getByRole('heading', { name: category });
}

// Assertions
async expectMainContentVisible() {
  await expect(this.mainHeading()).toBeVisible();
  await expect(this.startPracticingButton()).toBeVisible();
  await expect(this.startPracticingButton()).toHaveAttribute('href', '/questions');
}

async expectCategoryVisible(category: string) {
  await expect(await this.getCategoryHeading(category)).toBeVisible();
}
}
