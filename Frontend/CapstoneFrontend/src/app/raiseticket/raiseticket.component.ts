import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

  userID?:number;
  ticketMsg?:String;
  tickets?:Array<Ticket>;

  ticketRef = new FormGroup({
    useridticket:new FormControl(), //the name is the id name from the html page of each input/selection
    usermessageticket:new FormControl
  });

  constructor(
    public ticketItems:TicketService, 
    public activateRoute:ActivatedRoute,
    public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userID=data.userid);
    this.activateRoute.params.subscribe(data=>this.ticketMsg=data.issue);
  }

  // WHAT PART TO SEND TO DATABASE
  sendTicket(){
     this.ticketItems.raiseTicket(this.userID).subscribe(result=> {
       this.tickets=result;  // this line is where all info of each product is (variable: products [an array])
     },error=>console.log(error));
  }

}
