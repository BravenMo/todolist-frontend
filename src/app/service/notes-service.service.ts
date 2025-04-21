import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interface/note';
import { NoPreloading } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  // apiUrl:string = 'http://localhost:5000/notes/1';
  apiUrl:string = '/note';

  constructor(private http:HttpClient) { }

  public getNotes():Observable<Note>{
    return this.http.get<Note>(this.apiUrl);
  }
  
  public updateNote(note:Note):Observable<Note>{
    return this.http.put<Note>(this.apiUrl,note);
  }

  deleteAll():Observable<void>{
    return this.http.delete<void>(this.apiUrl);
  }
}
