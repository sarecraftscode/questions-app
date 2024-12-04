import { test, expect } from '@playwright/test';
import { LandingPage } from './pages/landing.page';

test.describe('Landing Page', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goto();
  });

  test('should display main heading and CTA button', async () => {
    await landingPage.expectMainContentVisible();
  });

  test('should display all category cards', async () => {
    const categories = [
      'Software Craftsmanship',
      'Backend Development',
      'Frontend Development'
    ];

    for (const category of categories) {
      await landingPage.expectCategoryVisible(category);
    }
  });

  test('navigation links should work', async ({ page }) => {
    await landingPage.navigateToQuestions();
    await expect(page).toHaveURL('/questions');

    await landingPage.navigateToPricing();
    await expect(page).toHaveURL('/pricing');
  });
});
