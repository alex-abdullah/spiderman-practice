import { Injectable } from '@angular/core';
import { Spiderman } from './spiderman';
import { SPIDERVERSE } from './mock-spidermen';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpidermanService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private spidermanUrl = 'api/spidermen'; //URL to web api

  getSpidermen(): Observable<Spiderman[]> {
    return this.http.get<Spiderman[]>(this.spidermanUrl).pipe(
      tap((_) => this.log('fetched spidermen')),
      catchError(this.handleError<Spiderman[]>('getSpidermen', []))
    );
  }

  getSpiderman(id: number): Observable<Spiderman> {
    const url = `${this.spidermanUrl}/${id}`;
    return this.http.get<Spiderman>(url).pipe(
      tap((_) => this.log(`fetched Spidermn id=${id}`)),
      catchError(this.handleError<Spiderman>(`getSpiderman id=${id}`))
    );
  }

  updateSpiderman(spiderman: Spiderman): Observable<any> {
    return this.http.put(this.spidermanUrl, spiderman, this.httpOptions).pipe(
      tap((_) => this.log(`updated Spiderman id=${spiderman.id}`)),
      catchError(this.handleError<any>('updatedSpiderman'))
    );
  }

  addSpiderman(spiderman: Spiderman): Observable<Spiderman> {
    return this.http
      .post<Spiderman>(this.spidermanUrl, spiderman, this.httpOptions)
      .pipe(
        tap((newSpiderman: Spiderman) =>
          this.log(`added Spider-Man w/ id=${newSpiderman.id}`)
        ),
        catchError(this.handleError<Spiderman>('addedSpiderman'))
      );
  }

  deleteSpiderman(id: number): Observable<Spiderman> {
    const url = `${this.spidermanUrl}/${id}`;

    return this.http.delete<Spiderman>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Spiderman>('deleteSpiderman'))
    );
  }

  // GET specific spiderman based on name containing search term

  searchSpiderman(term: string): Observable<Spiderman[]> {
    if (!term.trim()) {
      // if not a search term, return empty spidey array
      return of([]);
    }

    return this.http
      .get<Spiderman[]>(`${this.spidermanUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found spidermen matching "${term}`)
            : this.log(`no spidermen matching ${term}`)
        ),
        catchError(this.handleError<Spiderman[]>('searchSpiderman', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`SpidermanService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
