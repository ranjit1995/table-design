import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceTableComponent } from './performance-table/performance-table.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'performance',
    pathMatch:'full'
  },
  {
    path:'performance',
    component:PerformanceTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
