import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExcelReportService {

  private baseURL: string = `${environment.apiUrl}/excel`;

  constructor(private http: HttpClient) { }

  public downloadReport(): Observable<Blob> {
    return this.http.get(this.baseURL, {
      responseType: 'blob'
    });
  }
}
