import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/Sidebar/Sidebar.component';
import { LoginComponent } from './Components/Login/Login.component';
import { DashboardComponent } from './Components/Dashboard/Dashboard.component';
import { DashboardCardsComponent } from './Components/DashboardComponents/DashboardCards/DashboardCards.component';

@NgModule({
  declarations: [	
    AppComponent,
      SidebarComponent,
      LoginComponent,
      DashboardComponent,
      DashboardCardsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
