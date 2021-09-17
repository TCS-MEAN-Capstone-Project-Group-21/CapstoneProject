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

  addNewProduct(product:Product):Observable<any> {
    return this.http.post("http://localhost:9090/api/product/addProdRoute/",product,
    {responseType:'text'});
  }

    // call get method can convert all json data into customer array object. 
  retrieveAllProductsInfo():Observable<any>{
    return this.http.get<any>("http://localhost:9090/allProductDetails");
  }

  deleteProductInfo(productid:any):Observable<any> {
    return this.http.delete<any>("http://localhost:9090/api/product/deleteProdRoute/"+productid);
  }
  updateProduct(pro:Product): Observable<any>{
    return this.http.put("http://localhost:9090/api/product/updateProdRoute", pro, { responseType: 'text' });
	  }
}
