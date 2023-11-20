import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { RealocateProcessComponent } from './Components/realocate-process/realocate-process.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'employee-list',pathMatch:'full'},
  {path:'employee-list',component:EmployeeListComponent},
  { path:'relocate-process/:id', component: RealocateProcessComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
