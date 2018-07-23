import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IA3DataItem } from './IA3DataItem';
import { environment } from './environment';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ImageDataUploadService {
  private baseUrl = `${environment.gatewayUrl}/a3`;

  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  public save(imageData: FormData): Observable < IA3DataItem > {

    return this.httpClient .post < IA3DataItem > (this.baseUrl, imageData, {
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${this.auth.accessToken}`
      )
    })
    .pipe(
      catchError(this._handleError)
    );
  }

  public fetch(): Observable < IA3DataItem[] > {
    return this.httpClient.get < IA3DataItem[] > (this.baseUrl, {
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${this.auth.accessToken}`
      )
    })
    .pipe(
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return throwError(errorMsg);
  }
}