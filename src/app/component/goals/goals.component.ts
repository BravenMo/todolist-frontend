import { CommonModule } from '@angular/common';
import { Component, getNgModuleById } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetGoalsService } from '../../service/get-goals.service';
import { Goal } from '../../interface/goal';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {

  constructor(private service:GetGoalsService){}
  items:Goal[]=[];
  addGoalSelected:boolean=false;
  goalName:string='';
  showError:boolean=false;

  ngOnInit(){
    this.service.getItems().subscribe((data)=>{
      this.items=data;
      console.log(this.items);
    }
    );
  }

  clickedAddGoal(){
    this.addGoalSelected=true;
  }

  goBack(){
    this.addGoalSelected=false;
    this.goalName='';
    this.showError=false;
  }

  addedGoal(){
    if(!this.goalName.trim()){
      this.showError=true;
      return;
    }
    this.showError=false;
    this.service.addItems(this.goalName).subscribe((newGoal)=>{
      this.items.push(newGoal);
      this.goalName='';
    }
    );
  }

  deleteGoal(goal:Goal){
    this.service.deleteItems(goal.id).subscribe(()=>{
      this.items=this.items.filter(goalItem=>goalItem.id!=goal.id);
    })
  }

  //dummy
  clicked(check:boolean,id:number|undefined,goalItem:Goal){
    this.service.updateItems(id,check).subscribe((item)=>{
      goalItem.completed=check;
    })
  }
}
