import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  
  checkLoginDetails(login:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn",login,
    {responseType:'text'});
  }

  userAccountCreate(signup:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp",signup,
    {responseType:'text'});
  }
}
