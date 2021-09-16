import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  
  constructor(public http:HttpClient) { }

  addNewEmployee(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/sendrequest",employee,
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
}
