import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProgressServiceService {

  private baseURL: string = `${environment.apiUrl}/progress`;

  constructor(private http: HttpClient) { }

  getProgress(): Observable<number> {
    return this.http.get<number>(this.baseURL);
  }

  checkIfFull(): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}/full`);
  }
}
