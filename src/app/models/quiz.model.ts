import { Question } from './question.model';



export class Quiz {
  title: string;
  description: string;
  authorId: string;
  dateCreation: Date;
  dateEnding: Date;
  status: string;
  questions: Question[];
  quizId: number;
}
