import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  http: any;

  constructor() { }  
  sendRequest():Observable<any>{
    return this.http.get("http://localhost:9090/api/employee/sendRequest",
    {responseType:'text'});
  }
}
