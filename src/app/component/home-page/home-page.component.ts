import { Component } from '@angular/core';
import { GoalsComponent } from '../goals/goals.component';
import { HabitTrackerComponent } from '../habit-tracker/habit-tracker.component';
import { NotesBoxComponent } from '../notes-box/notes-box.component';
import { TitleTextComponent } from '../title-text/title-text.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoalsComponent,HabitTrackerComponent,NotesBoxComponent,TitleTextComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
