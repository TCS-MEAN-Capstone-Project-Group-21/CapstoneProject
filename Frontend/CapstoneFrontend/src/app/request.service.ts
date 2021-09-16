import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  http: any;

  constructor() { }  
  sendRequest(request:Request):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/sendRequest",request,
    {responseType:'text'});
  }
}
