import { TriedQuiz } from './../models/triedQuiz.model';
import { environment } from './../../environments/environment.prod';
import { Quiz } from './../models/quiz.model';
import { QuestionOption } from './../models/questionOption.model';
import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  options = new Observable<QuestionOption[]>();
  questions = new Observable<Question[]>();
  quizes = new Observable<Quiz[]>();

  constructor(private http: HttpClient) {}

  CreateRegistro(obj: TriedQuiz) {
    const url = `${environment.urlApi}/registro/save`;
    return this.http.post(url, obj).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.opcion;
        }
      })
    );
  }

  CreateQuiz(obj: Quiz) {
    const url = `${environment.urlApi}/cuestionario/save`;
    return this.http.post(url, obj).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.cuestionario;
        }
      })
    );
  }

  CreateQuestion(obj: Question) {
    const url = `${environment.urlApi}/pregunta/save`;
    return this.http.post(url, obj).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.pregunta;
        }
      })
    );
  }

  CreateOption(obj: QuestionOption) {
    const url = `${environment.urlApi}/opcion/save`;
    return this.http.post(url, obj).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.opcion;
        }
      })
    );
  }

}
