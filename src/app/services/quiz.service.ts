import { User } from './../models/user.model';
import { Answer } from './../models/answer.model';
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
  registers: Array<TriedQuiz>;

  constructor(private http: HttpClient) {
    this.getAllRegisters().subscribe();

  }

  CreateRegistro(obj: TriedQuiz) {
    const url = `${environment.urlApi}/cuestionarioRegistro/save`;
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

  CreateRespuesta(obj: Answer) {
    const url = `${environment.urlApi}/respuesta/save`;
    return this.http.post(url, obj).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.opcion;
        }
      })
    );
  }

  CreateUsuario(obj: User) {
    const url = `${environment.urlApi}/usuario/save`;
    return this.http.post(url, obj).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.opcion;
        }
      })
    );
  }

  getOpcionByPregunta(idPregunta: number) {
    const url = `${environment.urlApi}/opcion/getByPregunta`;
    return this.http.get(url)
               .pipe(
                 map((response: any) => {
                   if (response.ok) {
                     return response.opciones;
                   }
                 })
               );
  }

  getPreguntaByQuiz(idPregunta: number) {

  }

  getRespuestaByPregunta(idPregunta: number) {

  }

  getAllQuizes() {

  }

  getAllResultadosByUsuario() {

  }

  getAllRegisters() {
    const url = `${environment.urlApi}/CuestionarioRegstro/ getAll`;
     return this.http.get(url)
                .pipe(
                  map((response: TriedQuiz[]) => {
                    this.registers = [...response];
                    return this.registers;
                  })
                );
  }

  getTopRegisters() {
       const url = `${environment.urlApi}/CuestionarioRegstro/ cuestionariosResumen/{id}`;
       return this.http.get(url).pipe(
         map((response: TriedQuiz[]) => {
           this.registers = [...response];
           return this.registers;
         })
       );
  }
}
