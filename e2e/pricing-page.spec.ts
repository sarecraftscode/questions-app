import { test } from '@playwright/test';
import { PricingPage } from './pages/pricing.page';

test.describe('Pricing Page', () => {
  let pricingPage: PricingPage;

  test.beforeEach(async ({ page }) => {
    pricingPage = new PricingPage(page);
    await pricingPage.goto('/pricing');
  });

  test('should display all pricing tiers', async () => {
    const tiers = ['Basic', 'Pro', 'Team'];

    for (const tier of tiers) {
      await pricingPage.expectTierVisible(tier);
    }
  });

  test('should display correct pricing information', async () => {
    await pricingPage.expectPriceVisible('Free');
    await pricingPage.expectPriceVisible('$19/mo');
    await pricingPage.expectPriceVisible('$49/mo');
  });

  test('should highlight Pro tier as recommended', async () => {
    await pricingPage.expectProTierHighlighted();
  });
});
