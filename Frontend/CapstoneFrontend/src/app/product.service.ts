import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  chooseProducts(selectItems:Product):Observable<any>{
    // will take the objects of the selected items
    return this.http.post("http://localhost:9090/api/product/selectItems",selectItems,
    {responseType:'text'});
  }
}
