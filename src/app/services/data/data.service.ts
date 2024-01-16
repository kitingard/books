import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthUser } from '../../models/auth-user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  register(user: AuthUser): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(
      'https://api.realworld.io/api/users',
      { user },
    );
  }

  login(user: AuthUser): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(
      'https://api.realworld.io/api/users/login',
      { user },
    );
  }

  checkIfUserExist(): Observable<{ user: User }> {
    return this.http.get<{ user: User }>('https://api.realworld.io/api/user');
  }
}
