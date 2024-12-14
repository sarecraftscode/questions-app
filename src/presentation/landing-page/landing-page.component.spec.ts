import { render, screen } from '@testing-library/angular';
import { LandingPageComponent } from './landing-page.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('LandingPageComponent', () => {
  beforeEach(async () => {
    await render(LandingPageComponent);
  });

  it('should create', () => {
    const component = screen.getByTestId('landing-page');
    expect(component).toBeTruthy();
  });
});
