import { Component } from '@angular/core';
import { DateServiceService } from '../../service/date-service.service';
import { Router, RouterModule } from '@angular/router';
import { Goal } from '../../interface/goal';
import { Habit } from '../../interface/habit';
import { GetGoalsService } from '../../service/get-goals.service';
import { GetHabitsService } from '../../service/get-habits.service';
import { ProgressServiceService } from '../../service/progress-service.service';

@Component({
  selector: 'app-title-text',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title-text.component.html',
  styleUrl: './title-text.component.css'
})
export class TitleTextComponent {

  date:string='';

  constructor(private service:DateServiceService,private progressService:ProgressServiceService,private router:Router){}

  ngOnInit(){
    this.service.getDate().subscribe((value)=>{
      this.date = value.weekStart;
    });
  }

  proceed() {
    this.progressService.checkIfFull().subscribe((data)=>{
      if(data){
        this.router.navigate(['/submit']);
      }
      else{
        window.alert("Either goals or habit are empty. Please populate with data.")
      }
    })
  }
}
