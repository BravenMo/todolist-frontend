import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateFormatted } from '../interface/dateFormatted';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  apiUrl:string="/date";

  constructor(private http:HttpClient) { }

  getDate():Observable<DateFormatted>{
    return this.http.get<DateFormatted>(this.apiUrl);
  }
}
