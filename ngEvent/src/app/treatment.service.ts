import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Treatment } from './models/treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private url = 'http://localhost:8080/api/treatments';

  index() {
    // return this.todos;
    return this.http.get<Treatment[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on INDEX');
      })
    );
  }

  create(newTreatment: Treatment) {
    return this.http.post<Treatment>(this.url, newTreatment).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on CREATE');
      })
    );
  }

  update(tid: number, editedTreatment: Treatment) {
    console.log(editedTreatment);


    return this.http.put<Treatment>(this.url + '/' + tid, editedTreatment)
      .pipe(catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on UPDATE');
      })
      );
  }

  destroy(tid: number) {
    return this.http.delete<Treatment>(this.url + '/' + tid)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM on DESTROY');
        })
      );
  }

  constructor(private http: HttpClient) {}
}
