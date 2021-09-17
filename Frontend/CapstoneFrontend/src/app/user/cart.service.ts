import { Injectable } from '@angular/core';

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
    return this.itemId;
  }
}
