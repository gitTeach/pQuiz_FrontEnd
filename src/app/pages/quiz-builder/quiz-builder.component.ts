import { Quiz } from './../../models/quiz.model';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styles: []
})
export class QuizBuilderComponent implements OnInit {

  quiz: Quiz;
  questions = new Array<Question>();

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  constructor() { }
  ngOnInit(): void {
    this.quiz = new Quiz();
  }

   collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  addQuestion() {
    this.questions.push( new Question());
    console.log(this.questions);
  }

}
