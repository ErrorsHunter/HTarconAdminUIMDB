import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/Login.component';
import { DashboardComponent } from './Components/Dashboard/Dashboard.component';
import { SidebarComponent } from './Components/Sidebar/Sidebar.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "", component: SidebarComponent, children:
      [
        { path: "", redirectTo: "dashboard", pathMatch: "full" },
        { path: "dashboard", component: DashboardComponent },
      ]
  },
  { path: "**", redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
