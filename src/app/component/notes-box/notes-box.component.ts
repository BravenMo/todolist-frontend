import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../interface/note';
import { NotesServiceService } from '../../service/notes-service.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-notes-box',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './notes-box.component.html',
  styleUrl: './notes-box.component.css'
})
export class NotesBoxComponent {

  constructor(private service:NotesServiceService){}

  note:Note = {id:"1",content:''};
  private updateSubject = new Subject<Note>();

  ngOnInit() {
    this.service.getNotes().subscribe((data) => {
      this.note = data;
    });

    this.updateSubject.pipe(debounceTime(500)).subscribe((note) => {
      this.service.updateNote(note).subscribe();
    });
  }

  onNoteChange() {
    this.updateSubject.next(this.note);
  }
}
