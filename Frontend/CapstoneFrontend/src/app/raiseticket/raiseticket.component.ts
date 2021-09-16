import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

  userID?:number;
  ticketMsg?:String;

  constructor(public activateRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userID=data.userid);
    this.activateRoute.params.subscribe(data=>this.ticketMsg=data.issue);
  }

  // WHAT PART TO SEND TO DATABASE

}
