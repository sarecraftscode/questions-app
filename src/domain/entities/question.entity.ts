export interface Question {
  id: number;
  text: string;
  category: string;
  isAnswered: boolean;
  isCorrect?: boolean;
}

export class QuestionImpl implements Question {
  constructor(
    public id: number,
    public text: string,
    public category: string,
    public isAnswered: boolean = false,
    isCorrect?: boolean
  ) {}
}
