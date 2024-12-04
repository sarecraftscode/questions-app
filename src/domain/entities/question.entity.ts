export class Question  {
  constructor(
    public id: number,
    public text: string,
    public category: string,
    public isAnswered: boolean = false,
    public isCorrect?: boolean
  ) {}
}
