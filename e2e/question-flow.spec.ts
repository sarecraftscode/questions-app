import { test, expect } from '@playwright/test';
import { QuestionsPage } from './pages/question.page';

test.describe('Question Flow', () => {
  let questionsPage: QuestionsPage;

  test.beforeEach(async ({ page }) => {
    questionsPage = new QuestionsPage(page);
    await questionsPage.goto('/questions');
  });

  test('should allow selecting question count and category', async () => {
    await questionsPage.selectQuestionCount(10);
    await questionsPage.selectCategory('Software Craftsmanship');
    await questionsPage.expectQuestionNumber(1, 10);
  });

  test('should navigate through questions', async () => {
    // Setup
    await questionsPage.selectQuestionCount(10);
    await questionsPage.selectCategory('Software Craftsmanship');

    // Initial state
    await questionsPage.expectQuestionNumber(1, 10);
    await questionsPage.expectPreviousButtonState(true);

    // Navigate
    await questionsPage.answerQuestion(true);
    await questionsPage.goToNextQuestion();

    await questionsPage.expectQuestionNumber(2, 10);
    await questionsPage.expectPreviousButtonState(false);
  });

  test('should track progress correctly', async () => {
    // Setup
    await questionsPage.selectQuestionCount(10);
    await questionsPage.selectCategory('Software Craftsmanship');

    // First question
    await questionsPage.answerQuestion(true);
    await questionsPage.expectProgress(1, 10);

    // Second question
    await questionsPage.goToNextQuestion();
    await questionsPage.answerQuestion(false);
    await questionsPage.expectProgress(2, 10);
  });

  test('should allow returning to category selection', async ({ page }) => {
    await questionsPage.selectQuestionCount(10);
    await questionsPage.selectCategory('Software Craftsmanship');
    await questionsPage.returnToCategories();

    await expect(page.getByText('Select a Category')).toBeVisible();
  });
});
