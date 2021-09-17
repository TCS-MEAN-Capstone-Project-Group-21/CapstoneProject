import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model.employee';



@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  getEmployeeByID(id: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'http://localhost:9090/emp/getEmployeeById/' + id
    );
  }

  // update employee profile
  updateEmployeeProfile(editRef: any): void {
    console.log('updateinSVCfileReached');
    this.http
      .put('http://localhost:9090/emp/editEmployeeProfile', editRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }

  changeEmployeePassword(emp2Ref:any,id:any){
    this.http.put('http://localhost:9090/emp/changeEmployeePassword/'+id,emp2Ref, {
      responseType : 'text',
    }).subscribe(
      (result) => console.log(result),
        (error) => console.log(error)
    );
  }
  
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
