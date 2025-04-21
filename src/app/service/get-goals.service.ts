import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../interface/goal';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GetGoalsService {

  private apiUrl = `${environment.apiUrl}/items`;

  constructor(private http: HttpClient) { }

  getItems(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.apiUrl);
  }

  addItems(goalName: string): Observable<Goal> {
    const newGoal: Goal = { goalName: goalName, completed: false };
    console.log(newGoal);
    return this.http.post<Goal>(this.apiUrl, newGoal);
  }

  deleteItems(goalId: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${goalId}`);
  }

  updateItems(goalID: number | undefined, goalStatus: boolean): Observable<Goal> {
    return this.http.put<Goal>(`${this.apiUrl}/${goalID}/${goalStatus}`, null);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  getNumberOfGoalsCompleted(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/completed`);
  }

  getGoalsMissed(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/missed`);
  }
}
