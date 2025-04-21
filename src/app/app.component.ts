import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoalsComponent } from './component/goals/goals.component';
import { HabitTrackerComponent } from './component/habit-tracker/habit-tracker.component';
import { TitleTextComponent } from './component/title-text/title-text.component';
import { NotesBoxComponent } from './component/notes-box/notes-box.component';
import { SubmitWeekComponent } from './component/submit-week/submit-week.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist-frontend';
}
