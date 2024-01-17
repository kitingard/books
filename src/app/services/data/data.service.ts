import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthUser } from '../../models/auth-user.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `API returned code ${error.status}, body was: ${error.error}`,
      );
    }
    return throwError(() => {
      return new Error('An unexpected error occurred; please try again later.');
    });
  }

  register(user: AuthUser): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>('https://api.realworld.io/api/users', { user })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  login(user: AuthUser): Observable<{ user: User }> {
    return this.http
      .post<{
        user: User;
      }>('https://api.realworld.io/api/users/login', { user })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  checkIfUserExist(): Observable<{ user: User }> {
    return this.http
      .get<{ user: User }>('https://api.realworld.io/api/user')
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }
}
