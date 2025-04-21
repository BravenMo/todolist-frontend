import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetHabitsService } from '../../service/get-habits.service';
import { Habit } from '../../interface/habit';

@Component({
  selector: 'app-habit-tracker',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './habit-tracker.component.html',
  styleUrl: './habit-tracker.component.css'
})
export class HabitTrackerComponent {
  habits:Habit[]=[]
  addHabitSelected:boolean=false;
  habitName:string='';
  showError:boolean=false;

  constructor(private service:GetHabitsService){}

  ngOnInit(){
    this.service.getHabits().subscribe((data)=>{
      this.habits=data
    }
    );
  }

  addHabit(){
    this.addHabitSelected=true;
  }

  addedHabit(){
    if(!this.habitName.trim()){
      this.showError=true;
      return;
    }
    console.log(this.habitName);
    this.showError=false;
    this.service.addHabit(this.habitName).subscribe((habit)=>{
      this.habits.push(habit);
      this.habitName='';
    }
    );
  }

  goBack(){
    this.addHabitSelected=false;
    this.showError=false;
    this.habitName='';
  }

  deleteHabit(habit:Habit){
    this.service.deleteHabit(habit.id).subscribe( ()=>{
      this.habits=this.habits.filter(filteredHabit=>filteredHabit.id!=habit.id);
    })
  }

  sundayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForSunday(arg0,arg1).subscribe((item)=>{
      _t16.sundayCompleted=arg1;
    })
  }

  saturdayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForSaturday(arg0,arg1).subscribe((item)=>{
      _t16.saturdayCompleted=arg1;
    })
  }

  fridayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForFriday(arg0,arg1).subscribe((item)=>{
      _t16.fridayCompleted=arg1;
    })
  }

  thursdayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForThursday(arg0,arg1).subscribe((item)=>{
      _t16.thursdayCompleted=arg1;
    })
  }

  wednesdayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForWednesday(arg0,arg1).subscribe((item)=>{
      _t16.wednesdayCompleted=arg1;
    })
  }

  tuesdayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForTuesday(arg0,arg1).subscribe((item)=>{
      _t16.tuesdayCompleted=arg1;
    })
  }

  mondayChanged(arg0: number|undefined,arg1: boolean,_t16: Habit) {
    this.service.updateHabitForMonday(arg0,arg1).subscribe((item)=>{
      _t16.mondayCompleted=arg1;
    })
  }
}
    