import { Component } from '@angular/core';
import { ExcelReportService } from '../../service/excel-report.service';
import { GetGoalsService } from '../../service/get-goals.service';
import { GetHabitsService } from '../../service/get-habits.service';
import { NotesServiceService } from '../../service/notes-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Note } from '../../interface/note';
import { ProgressServiceService } from '../../service/progress-service.service';

@Component({
  selector: 'app-submit-week',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './submit-week.component.html',
  styleUrl: './submit-week.component.css'
})
export class SubmitWeekComponent {

  progressValue!:number;
  numberOfGoalsCompleted!:number;
  goalsMissed:string[]=[];
  goalsMissedBoolean!:boolean;
  numberOfHabitsCompleted!:number;
  habitsMissed:string[]=[];
  habitsMissedBoolean!:boolean;
  note!:Note;

  constructor(private service:ExcelReportService,private goalService:GetGoalsService,private habitService:GetHabitsService,
    private noteService:NotesServiceService,private progressService:ProgressServiceService,private router:Router){}

  ngOnInit(){
    this.goalService.getNumberOfGoalsCompleted().subscribe((num)=>{
      this.numberOfGoalsCompleted=num;
    })
    this.goalService.getGoalsMissed().subscribe((item)=>{
      this.goalsMissed=item;
      if(item.length==0){
        this.goalsMissedBoolean=false;
      }
      else{
        this.goalsMissedBoolean=true;
      }
    })
    this.habitService.getNumberOfHabitsCompleted().subscribe((num)=>{
      this.numberOfHabitsCompleted=num;
    })
    this.habitService.getHabitsMissed().subscribe((item)=>{
      this.habitsMissed=item;
      if(item.length==0){
        this.habitsMissedBoolean=false;
      }
      else{
        this.habitsMissedBoolean=true;
      }
    })
    this.noteService.getNotes().subscribe((item)=>{
      this.note=item;
    })
    this.progressService.getProgress().subscribe((num)=>{
      console.log(num);
      this.progressValue=Math.ceil(num*100);
    })
  }

  downloadReport() {
    this.service.downloadReport().subscribe((response: Blob) => {
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'WeeklyReport.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  clearAndMove() {
    this.goalService.deleteAll().subscribe(()=>{console.log("Goals deleted")});
    this.habitService.deleteAll().subscribe(()=>{console.log("Habits deleted")});
    this.noteService.deleteAll().subscribe(()=>{console.log("Note deleted")});
    this.router.navigate(['/home']);
  }
}
