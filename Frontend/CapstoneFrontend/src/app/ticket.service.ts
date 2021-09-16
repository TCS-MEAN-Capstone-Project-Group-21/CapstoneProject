import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(public http:HttpClient) { }

  raiseTicket(ticket:Ticket):Observable<any>{
    return this.http.post("http://localhost:9090/api/ticket/raiseTicket",ticket,
    {responseType:'text'});
  }

}
