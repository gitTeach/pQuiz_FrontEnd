import { PagesRoutingModule } from './pages.routing';
import { NgModule } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';
import { QuizBuilderComponent } from './quiz-builder/quiz-builder.component';


@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    QuizComponent,
    QuizBuilderComponent
  ]
})
export class PagesModule { }
