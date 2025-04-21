import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from '../interface/habit';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GetHabitsService {

  private baseURL: string = `${environment.apiUrl}/habits`;

  constructor(private http: HttpClient) { }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>(this.baseURL);
  }

  addHabit(habitName: string): Observable<Habit> {
    const newHabit: Habit = {
      habitName: habitName,
      mondayCompleted: false,
      tuesdayCompleted: false,
      wednesdayCompleted: false,
      thursdayCompleted: false,
      fridayCompleted: false,
      saturdayCompleted: false,
      sundayCompleted: false
    };
    return this.http.post<Habit>(this.baseURL, newHabit);
  }

  deleteHabit(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }

  updateHabitForMonday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/monday/${id}/${checked}`, null);
  }

  updateHabitForTuesday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/tuesday/${id}/${checked}`, null);
  }

  updateHabitForWednesday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/wednesday/${id}/${checked}`, null);
  }

  updateHabitForThursday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/thursday/${id}/${checked}`, null);
  }

  updateHabitForFriday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/friday/${id}/${checked}`, null);
  }

  updateHabitForSaturday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/saturday/${id}/${checked}`, null);
  }

  updateHabitForSunday(id: number | undefined, checked: boolean): Observable<Habit> {
    return this.http.put<Habit>(`${this.baseURL}/sunday/${id}/${checked}`, null);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(this.baseURL);
  }

  getNumberOfHabitsCompleted(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/completed`);
  }

  getHabitsMissed(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseURL}/missed`);
  }
}
