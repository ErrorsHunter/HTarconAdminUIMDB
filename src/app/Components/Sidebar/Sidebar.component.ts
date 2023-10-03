import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../Services/auth/auth.service';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  routes: any = [
    {
      routeUrl: "/dashboard",
      routeName: "Dashboard",
      routeIcons: "bx bx-grid-alt"
    }

  ]
  constructor() { }

  ngOnInit() {
  }
  
}
