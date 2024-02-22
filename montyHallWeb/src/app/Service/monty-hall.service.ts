import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { simulation } from '../Model/Simulation';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {

  private baseUrl = 'https://localhost:7218/api/montyHall';

  constructor(private http: HttpClient) { }

  simulate(numSimulations: number, changeDoor: boolean): Observable<any> {
    console.log("check", numSimulations, changeDoor)
    return this.http.post(`${this.baseUrl}`, { numSimulations, changeDoor });
  }
}
