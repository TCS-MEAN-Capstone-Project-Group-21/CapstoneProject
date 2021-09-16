import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  cart:Array<number> = [];

  setCart(cart:Array<number>){
    this.cart=cart;
  }

  getCart():Array<number>{
    return this.cart;
  }
}
