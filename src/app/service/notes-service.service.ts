import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interface/note';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  private apiUrl: string = `${environment.apiUrl}/note`;

  constructor(private http: HttpClient) { }

  public getNotes(): Observable<Note> {
    return this.http.get<Note>(this.apiUrl);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.apiUrl, note);
  }

  public deleteAll(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
}
