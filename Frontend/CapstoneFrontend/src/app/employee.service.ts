import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  
  constructor(public http:HttpClient) { }

<<<<<<< HEAD
   // sendrequest take the objects items and quantities
  sendrequestDetails(sendrequest:EmployeeComponent):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/sendrequest",sendrequest,
    {responseType:'text'});
  }
  //editing the password and creating new password
  editemp(editprofile:EmployeeComponent):Observable<any>{
=======
  addNewEmployee(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/addEmployee",employee,
    {responseType:'text'});
  }

  sendrequestDetails(sendrequest:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/sendrequest",sendrequest,
    {responseType:'text'});
  }
  editemp(editprofile:Employee):Observable<any>{
>>>>>>> e93253673a80aa66b29950bfe61c49d0407b36ef
    return this.http.post("http://localhost:9090/api/employee/editprofile",editprofile,
    {responseType:'text'});
  }
}
