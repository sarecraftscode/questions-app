import { test } from '@playwright/test';
import { LandingPage } from './pages/landing.page';

test.describe('Landing Page', () => {

  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goto('');
  });

  test('should display main heading and CTA button', async() => {

    await landingPage.expectMainContentVisible();
  });
});
