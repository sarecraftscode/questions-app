import { render, screen } from '@testing-library/angular';
import { beforeEach, describe, expect, it } from 'vitest';
import { CategorySelectionComponent } from './category-selection.component';

describe('CategorySelectionComponent', () => {
  beforeEach(async () => {
    await render(CategorySelectionComponent);
  });

  it('should create', () => {
    const component = screen.getByTestId('category-selection');
    expect(component).toBeTruthy();
  });
});
