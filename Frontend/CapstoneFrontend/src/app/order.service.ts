import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  genReports(order:Order):Observable<any>{//send order query to backend
    return this.http.post("http://localhost:9090/api/product/selectItems",order,
    {responseType:'json'});
  }

}
