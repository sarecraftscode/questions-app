import { render } from '@testing-library/angular';
import { beforeEach, describe, expect, it } from 'vitest';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;

  beforeEach(async () => {
    const { fixture } = await render(ProgressBarComponent);
    component = fixture.componentInstance;
  });

  it('should initialize with default values', () => {
    expect(component.current).toBe(0);
    expect(component.total).toBe(0);
    expect(component.percentage).toBe(0);
  });

  it('should update values through inputs', () => {
    component.current = 2;
    component.total = 4;
    component.percentage = 50;

    expect(component.current).toBe(2);
    expect(component.total).toBe(4);
    expect(component.percentage).toBe(50);
  });
});
