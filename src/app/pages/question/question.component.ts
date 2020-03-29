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
    if (this.question.id === undefined) {
      this.question = new Question();
      this.question.idTipoPregunta = 1;
    }
  }

  addOption() {
    let opt = new QuestionOption();
      this.options.push(opt);
      console.log('aass', this.options);
  }

  typeChanged(e: any) {
  }

}
