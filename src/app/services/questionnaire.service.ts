import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {
  submitQuestionnaire(data:any): Observable<any> {
    // Mocked response so front-end works without a backend
    return of({ ok: true });
  }
  getSubmissions(){ return of([]); }
}