import { Question } from 'src/domain/entities/question.entity';

export const mockQuestions: Question[] = [
  new Question(
    1,
    'What is Clean Architecture and how does it improve software design?',
    'software-craftsmanship',
    false,
  ),
  new Question(
    2,
    'Explain Test-Driven Development (TDD) and its benefits',
    'software-craftsmanship',
    false,
  ),
  new Question(
    3,
    'What are the SOLID principles and why are they important?',
    'software-craftsmanship',
    false,
  ),
  new Question(
    4,
    'How do you implement Dependency Injection in a Spring application?',
    'backend-development',
    false,
  ),
  new Question(
    5,
    'Explain the Virtual DOM concept in React',
    'frontend-development',
    false,
  ),
  new Question(6, 'What is TDD?', 'software-craftsmanship', false),
];
