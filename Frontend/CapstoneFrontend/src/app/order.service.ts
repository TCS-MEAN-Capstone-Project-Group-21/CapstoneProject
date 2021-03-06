import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public http: HttpClient) {}

  getOrdersByUserID(uid: any): Observable<Order[]> {
    return this.http.get<Order[]>(
      'http://localhost:9090/order/getOrdersByUserID/' + uid
    );
  }
  getAllOrders():Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/getAllOrders");
  }
  // update order status
  updateOrderStatus(updateRef: any): any {
    console.log('updateRef: ' + updateRef);
    this.http
      .put('http://localhost:9090/order/updateOrderStatus', updateRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  getUserpurchased(id: any): Observable<Order> {
    return this.http.get<Order> ('http://localhost:9090/getUserPurchasedDetails/' + id);
  }
  getProductpurchased(product: any): Observable<Order> {
    return this.http.get<Order> ('http://localhost:9090/getProductPurchasedDetails/' + product);
  }
  getDatepurchased(date: any): Observable<Order> {
    return this.http.get<Order> ('http://localhost:9090/getDatePurchasedDetails/' + date);
  }
  getDatesPurchased(date: any, date2: any): Observable<Order> {
    return this.http.get<Order> ('http://localhost:9090/twoDatesPurchased/' + date + '/' + date2);
  }
  genReports(order:Order):Observable<any>{//send order query to backend
    return this.http.post("http://localhost:9090/api/order/queryReport",order,
    {responseType:'json'});
  }
}
