export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'software-craftsmanship',
    name: 'Software Craftsmanship',
    description: 'Questions about TDD, Clean Code, and software design principles'
  },
  {
    id: 'backend-development',
    name: 'Backend Development',
    description: 'Questions about server-side programming and architecture'
  },
  {
    id: 'frontend-development',
    name: 'Frontend Development',
    description: 'Questions about client-side development and UI/UX'
  }
];

export const QUESTION_COUNT_OPTIONS = [
  { value: 10, label: '10 Questions' },
  { value: 25, label: '25 Questions' },
  { value: 50, label: '50 Questions' }
];
