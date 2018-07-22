import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IA3DataItem } from './IA3DataItem';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class ImageDataUploadService {
  private baseUrl = `${environment.gatewayUrl}/a3`;

  constructor(private httpClient: HttpClient) {}

  public save(imageData: FormData): Observable < IA3DataItem > {

    return this.httpClient .post < IA3DataItem > (this.baseUrl, imageData);
  }

  public fetch(): Observable < IA3DataItem[] > {
    return this.httpClient.get < IA3DataItem[] > (this.baseUrl);
  }
}
