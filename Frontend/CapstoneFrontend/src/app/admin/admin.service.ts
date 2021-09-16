import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }
  checkLogin(login:Admin):Observable<any>{
    return this.http.post("http://localhost:9090/api/admin/signIn",login,
    {responseType:'text'});
  }
}
