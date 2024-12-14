import { render } from '@testing-library/angular';
import { NavigationComponent } from './navigation.component';
import { describe, it, expect } from 'vitest';

describe('NavigationComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(NavigationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
