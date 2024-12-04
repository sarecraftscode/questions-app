import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class PricingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  readonly tierHeading = (tier: string) =>
    this.page.getByRole('heading', { name: tier });
  readonly proTierCard = () => this.page.locator('div', {
    has: this.page.getByRole('heading', { name: 'Pro' })
  });

  // Assertions
  async expectTierVisible(tier: string) {
    await expect(this.tierHeading(tier)).toBeVisible();
  }

  async expectPriceVisible(price: string) {
    await expect(this.page.getByText(price)).toBeVisible();
  }

  async expectProTierHighlighted() {
    await expect(this.proTierCard()).toHaveClass(/border-blue-500/);
  }
}
