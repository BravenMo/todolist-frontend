import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateFormatted } from '../interface/dateFormatted';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  constructor(private http:HttpClient) { }

  getDate():Observable<DateFormatted>{
    return this.http.get<DateFormatted>(`${environment.apiUrl}/date`);
  }
}
