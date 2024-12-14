import { render, screen } from '@testing-library/angular';
import { beforeEach, describe, expect, it } from 'vitest';
import { PricingPageComponent } from './pricing-page.component';

describe('PricingPageComponent', () => {
  beforeEach(async () => {
    await render(PricingPageComponent);
  });

  it('should create', () => {
    const component = screen.getByTestId('pricing-page');
    expect(component).toBeTruthy();
  });
});
