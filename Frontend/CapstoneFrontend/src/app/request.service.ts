import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http:HttpClient) { }  
  sendRequest(request:Request):Observable<any>{
    return this.http.post("http://localhost:9090/api/request/sendRequest",request,
    {responseType:'text'});
  }

  getTickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/ticket/getTicket",
    {responseType:'json'});
  }
}
