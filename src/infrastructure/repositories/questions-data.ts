import { Question, QuestionImpl } from "src/domain/entities/question.entity";

const softwareCraftmanshipQuestions = [
  "Explain Test-Driven Development (TDD) and its benefits",
  "What are the SOLID principles and why are they important?",
  "Explain the concept of Clean Architecture",
  "What is Domain-Driven Design (DDD)?",
  "How do you handle technical debt?",
  // ... (continue with more questions)
];

const backendDevelopmentQuestions = [
  "Explain dependency injection and its benefits",
  "What are microservices and when should they be used?",
  "Explain the CAP theorem",
  "What is eventual consistency?",
  "How do you handle distributed transactions?",
  // ... (continue with more questions)
];

const frontendDevelopmentQuestions = [
  "What is the Virtual DOM and how does it work?",
  "Explain the concept of state management",
  "What are Web Components?",
  "Explain the difference between server-side and client-side rendering",
  "What are Progressive Web Apps (PWAs)?",
  // ... (continue with more questions)
];

export function generateQuestions(): Question[] {
  const questions: Question[] = [];
  let id = 1;

  // Generate Software Craftsmanship questions
  softwareCraftmanshipQuestions.forEach(text => {
    questions.push(new QuestionImpl(id++, text, 'Software Craftsmanship'));
  });

  // Generate Backend Development questions
  backendDevelopmentQuestions.forEach(text => {
    questions.push(new QuestionImpl(id++, text, 'Backend Development'));
  });

  // Generate Frontend Development questions
  frontendDevelopmentQuestions.forEach(text => {
    questions.push(new QuestionImpl(id++, text, 'Frontend Development'));
  });

  // Generate additional questions to reach 500 total
  const categories = ['software-craftsmanship', 'backend-development', 'frontend-development'];
  const baseQuestions = [...softwareCraftmanshipQuestions, ...backendDevelopmentQuestions, ...frontendDevelopmentQuestions];

  while (questions.length < 500) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const baseQuestion = baseQuestions[Math.floor(Math.random() * baseQuestions.length)];
    const variant = Math.floor(questions.length / baseQuestions.length) + 1;

    questions.push(new QuestionImpl(
      id++,
      `${baseQuestion} (Variant ${variant})`,
      category
    ));
  }

  return questions;
}
