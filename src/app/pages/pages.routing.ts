import { QuizBuilderComponent } from './quiz-builder/quiz-builder.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';

const RUTAS: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'tests'
      },
      {
        path: 'tests',
        component: QuizComponent,
        data: {
          title: 'Tests'
        }
      },
      {
        path: 'builder',
        component: QuizBuilderComponent,
        data: {
          title: 'Quiz Builder'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(RUTAS)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
