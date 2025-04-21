import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelReportService {

  constructor(private http:HttpClient) { }

  baseURL:string='/excel';

  public downloadReport(){
    return this.http.get(this.baseURL, {
      responseType: 'blob'
    });
  }
}
