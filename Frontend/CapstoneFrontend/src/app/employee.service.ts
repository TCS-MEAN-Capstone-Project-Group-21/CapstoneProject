import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  
  constructor(public http:HttpClient) { }

  
  sendrequestDetails(sendrequest:EmployeeComponent):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/sendrequest",sendrequest,
    {responseType:'text'});
  }
  editemp(editprofile:EmployeeComponent):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/editprofile",editprofile,
    {responseType:'text'});
  }
}