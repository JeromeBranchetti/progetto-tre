import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

export interface AuthResponseData {
  access_token: string;
  tokenExpireIn: number;
  refreshToken: string;
  refreshTokenExpireIn: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  // signUp(user: string, password: string) {
  //   return this.http.post<AuthResponseData>('http://localhost:3000/register',
  //   {
  //     user: user,
  //     password: password,
  //   })
  //   .pipe(catchError(this.handleError), tap(respData => {

  //     const expirationDate = new Date();
  //     const user = new User(respData.access_token, expirationDate  )
  //   }));
  // }

  logIn(user: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/auth/login', {
        user: user,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => {
          const expirationDate = new Date(
            new Date().getTime() + +respData.tokenExpireIn * 1000
          );
          const user = new User(respData.access_token, expirationDate);
          this.user.next(user);
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email exists already';
    }
    return throwError(errorMessage);
  }
}
