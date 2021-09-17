import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  
  constructor(public http:HttpClient) { }

  getUserunlock():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/raiseticket",
    {responseType:'json'});
  }


  addNewEmployee(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/addEmployee",employee,
    {responseType:'text'});
  }
  deleteEmployee(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/deleteEmployee",employee,
    {responseType:'text'});
  }

  sendrequestDetails(sendrequest:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/sendrequest",sendrequest,
    {responseType:'text'});
  }
  editemp(editprofile:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/editprofile",editprofile,
    {responseType:'text'});
  }
  getUserlock():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/lockUsers",
    {responseType:'json'});
  }
  
  getTickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/raiseticket/getTickets",
    {responseType:'json'});
  }
}


