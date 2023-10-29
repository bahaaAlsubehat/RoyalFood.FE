import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Module } from './CustomerPort/part1/part1.module';
import { Part2Module } from './CustomerPort/part2/part2.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => Part1Module
  },
  {
    path:'',
    loadChildren: ()=> Part2Module
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
