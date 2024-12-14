import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';
import { QuestionViewerComponent } from './question-viewer.component';

describe('QuestionViewerComponent', () => {
  it('should create', async () => {
    await render(QuestionViewerComponent);

    expect(screen).toBeTruthy();
  });
});
