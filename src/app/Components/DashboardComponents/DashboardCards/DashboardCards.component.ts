import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-DashboardCards',
  templateUrl: './DashboardCards.component.html',
  styleUrls: ['./DashboardCards.component.scss']
})
export class DashboardCardsComponent implements OnInit {
  cards : any = [
    {
      title : "card title",
      icon : "fa fa-list",
      button_url : "/login",
      button_title: "more info",
      count : 64,
      show_button :true,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
