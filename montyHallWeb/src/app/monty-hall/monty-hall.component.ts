import { Component, OnInit } from '@angular/core';
import { MontyHallService } from '../Service/monty-hall.service';
import { simulation } from '../Model/Simulation';

@Component({
  selector: 'app-monty-hall',
  templateUrl: './monty-hall.component.html',
  styleUrls: ['./monty-hall.component.css']
})
export class MontyHallComponent implements OnInit{

  numSimulations: number = 0;
  changeDoor: boolean = false;
  winCount: number = 0;
  winPercentage: number = 0;
  simulations: simulation[] = [];

  constructor(private montyHallService: MontyHallService) { }

  ngOnInit(): void {
  }

  simulateGames() {
    console.log("count -- >", this.numSimulations, this.changeDoor);
    this.montyHallService.simulate(this.numSimulations, this.changeDoor)
      .subscribe((data: any) => {
        console.log("dataaa", data)
        this.winCount = data.winCount;
        this.winPercentage = data.winPercentage;
        this.simulations.push({
          numSimulation: this.numSimulations,
          changeDoor: this.changeDoor,
          winCount: this.winCount,
          winPercentage: this.winPercentage
        });
      });
  }

}
