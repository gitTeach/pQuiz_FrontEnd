import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styles: []
})
export class QuizBuilderComponent implements OnInit {


  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  constructor() { }
  ngOnInit(): void {
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

}
