import { Question } from './../../models/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styles: []
})
export class QuestionComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('question') question: Question;

  constructor() { }

  ngOnInit(): void {
    if (this.question.questionId === undefined) {
      this.question = new Question();
      this.question.status = 'C';
    }
  }

}
