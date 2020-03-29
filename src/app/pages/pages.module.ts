import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { NgModule } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';
import { QuizBuilderComponent } from './quiz-builder/quiz-builder.component';
import { QuestionOptionComponent } from './question-option/question-option.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuizComponent,
    QuizBuilderComponent,
    QuestionComponent,
    QuestionOptionComponent
  ]
})
export class PagesModule { }
