import { QuestionOption } from './../../models/questionOption.model';
import { QuizService } from './../../services/quiz.service';
import { Question } from './../../models/question.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styles: []
})
export class QuestionComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('question') question: Question;

  options = new Array<QuestionOption>();

  constructor(
    private serv: QuizService
  ) {
    this.serv.options.subscribe(lista => (this.options = [...lista]));
  }

  ngOnInit(): void {
    if (this.question.questionId === undefined) {
      this.question = new Question();
      this.question.questionTypeId = 1;
      this.question.status = '';

    }
  }

  addOption() {
    let opt = new QuestionOption();
    opt.typeOpt = this.question.questionTypeId;
      this.options.push(opt);
      console.log('aass', this.options);
  }

  typeChanged(e: any) {
  }

}
