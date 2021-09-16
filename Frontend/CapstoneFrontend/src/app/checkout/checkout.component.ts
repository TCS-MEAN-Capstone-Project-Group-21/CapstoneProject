import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  user={};
  leftOverAmount?:number;
  totalCartCost?:Number;
  totalFunds?:Number;
  checkoutMsg?:string; 
  products?:Array<Product>;
  constructor(public productItems:ProductService) { }


  ngOnInit(): void {
  }

  checkFunds(){
    //deduct the amount of money present in the user's funds
    // if user does not have sufficient amount, user will get an error message
    // if user has sufficient amount, user will have their order placed ("your order has been placed")
    //this.leftOverAmount=(this.totalFunds? - this.totalCartCost?);


  }

}
