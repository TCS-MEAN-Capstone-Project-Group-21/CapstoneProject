import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  productAfterStore?:Array<any>;
  products?:Array<Product>;
  userID:number=-1;
  prodName?:String;
  prodPrice?:number;

  data = [
    {id: 0, name: 'Apple', price: 7.00},
    {id: 1, name: 'Blueberry', price: 8.00},
    {id: 2, name: 'Grape', price: 5.00},{id: 0, name: 'Apple', price: 7.00},
    {id: 1, name: 'Blueberry', price: 8.00},
    {id: 2, name: 'Grape', price: 5.00},{id: 0, name: 'Apple', price: 7.00},
    {id: 1, name: 'Blueberry', price: 8.00},
    {id: 2, name: 'Grape', price: 5.00},{id: 0, name: 'Apple', price: 7.00},
    {id: 1, name: 'Blueberry', price: 8.00},
    {id: 2, name: 'Grape', price: 5.00},]
  
  selectedItemsRef = new FormGroup({
    productid:new FormControl(),
    productname:new FormControl(),
    productprice:new FormControl(),
    productquantity:new FormControl()
    //totalproductamount:new FormControl()
  });

  constructor(public selectedItems:ProductService,
    public activateRoute:ActivatedRoute,
    public router:Router,
    public cartSer:CartService) { } // DI for Selected Items

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userID=data.userid);
  }

  addToCart(id:number){
    let item = id;
    let cart = this.cartSer.getCart();
    console.log(cart.indexOf(item));
    if(cart.indexOf(item)==-1){
      cart.push(item);
      console.log(cart.indexOf(item));
      this.cartSer.setCart(cart)
    }
    console.log(cart);
  }

}

class items{
  constructor(public id:number,public quantity:number,public user:number){}
}
