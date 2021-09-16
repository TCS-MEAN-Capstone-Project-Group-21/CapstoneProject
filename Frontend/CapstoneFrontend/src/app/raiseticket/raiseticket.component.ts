import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

  userID?:number;
  ticketMsg?:String;

  ticketRef = new FormGroup({
    useridticket:new FormControl(), //the name is the id name from the html page of each input/selection
    usermessageticket:new FormControl
  });

  constructor(public activateRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userID=data.userid);
    this.activateRoute.params.subscribe(data=>this.ticketMsg=data.issue);
  }

  // WHAT PART TO SEND TO DATABASE
  sendTicket(){
    
  }

}
