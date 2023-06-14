import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';

const routes: Routes = [
  { path:'Home',
    component:HomeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'Home'
  },
  { path:'Timesheet',
    component:TimesheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
