import { QuestionState } from 'src/app/state/question.state';

export async function loadQuestionsWithCategory(state: QuestionState) {
  await state.loadQuestions('software-craftsmanship', 2);
}

export async function answerSomeQuestions(state: QuestionState) {
  await state.loadQuestions('software-craftsmanship', 2);
  await state.answerQuestion(1, true);
  await state.answerQuestion(2, false);
}

export async function resetState(state: QuestionState) {
  state.resetCategory();
}
