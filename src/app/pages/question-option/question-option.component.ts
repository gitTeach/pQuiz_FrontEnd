import { QuestionOption } from './../../models/questionOption.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-option',
  templateUrl: './question-option.component.html',
  styles: []
})
export class QuestionOptionComponent implements OnInit {

  constructor() { }

  @Input() qOption: QuestionOption;
  @Input() optIndex: number;
  @Input() inProd = false;

  optionIdStr: string;
  optEnabled = false;

  ngOnInit(): void {
    this.optionIdStr = 'option' + this.optIndex;
    console.log(this.qOption, this.optIndex);
  }

}
