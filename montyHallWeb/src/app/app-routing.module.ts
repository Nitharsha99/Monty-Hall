import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontyHallComponent } from './monty-hall/monty-hall.component';

const routes: Routes = [
  {path:'m', component: MontyHallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
