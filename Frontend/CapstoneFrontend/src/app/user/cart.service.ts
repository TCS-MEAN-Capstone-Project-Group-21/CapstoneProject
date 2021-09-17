import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// need a cart class?

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  itemId:Array<number> = [];
  itemQuantity:Array<number> = [];
  cost:number=0;

  setCart(itemId:Array<number>, itemQuantity:Array<number>){
    this.itemId=itemId;
    this.itemQuantity=itemQuantity;
  }

  getQuantity():Array<number>{
    return this.itemQuantity
  }

  getCart():Array<number>{
    return this.itemId; // only the product ID
  }
}
