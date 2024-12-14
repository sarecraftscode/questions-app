import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(() => render(AppComponent));

  it('should create the app', () => {
    expect(screen).toBeTruthy();
  });
});
