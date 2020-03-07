import { QuestionOption } from './questionOption.model';


export class Question {
  text: string;
  instructions: string;
  questionTypeId: number;
  value: number;
  sort: number;
  status: string;
  rangeMin: number;
  rangeMax: number;
  quizId: number;
  questionId: number;
}
