import { QuestionOption } from './questionOption.model';


export class Question {
  id: number;
  texto:	string;
  idTipoPregunta: number;
  orden: number;
  instrucciones:	string;
  idCuestionario:	number;
  peso:	number;
  rangoMaximo: number;
  rangoMinimo: number;
}
