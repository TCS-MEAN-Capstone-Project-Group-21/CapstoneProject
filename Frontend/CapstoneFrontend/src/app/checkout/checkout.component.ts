import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(public productItems:ProductService,public activateRoute:ActivatedRoute,public router:Router) { }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.totalFunds=data.userid);
  }

  checkFunds(){
    //deduct the amount of money present in the user's funds
    // if user does not have sufficient amount, user will get an error message
    // if user has sufficient amount, user will have their order placed ("your order has been placed")
/*
    this.leftOverAmount=this.totalFunds? - this.totalCartCost?;

    if(this.leftOverAmount? >= 0 ){
      this.checkoutMsg = 'You have enough funds to checkout';
    } else {
      this.checkoutMsg = 'You do not have enough funds in your account to checkout. Please add more to your funds.'
    }
*/

  }

}
