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
  totalProdCost:number=0;
  leftOverAmount?:number;
  totalCartCost:number=0;
  totalFunds:number=0;
  checkoutMsg?:string; 
  products?:Array<Product>;
  secondArr?:Array<any>;
  pid?:number;
  price?:number;
  quantity?:number;
  constructor(public productItems:ProductService,public activateRoute:ActivatedRoute,public router:Router) { }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.totalFunds=data.userid);
    this.activateRoute.params.subscribe(data=>this.pid=data.productid);
    this.activateRoute.params.subscribe(data=>this.price=data.productprice);
    this.activateRoute.params.subscribe(data=>this.quantity=data.productquantity);
  }

  checkFunds(){
    //deduct the amount of money present in the user's funds
    // if user does not have sufficient amount, user will get an error message
    // if user has sufficient amount, user will have their order placed ("your order has been placed")
    // this.totalCartCost= this.price? * this.quantity;

    // this.leftOverAmount=this.totalFunds? - parseFloat(this.totalCartCost?);

    // ---  where to get the json object/array of the user's selection
    let costObj = {
      pid:this.pid,
      costprice:this.price,
      pquantity:this.quantity
    };
    //--GET THE USER'S WHOLE CART ARRAY AND SET IT
    this.secondArr?.push(costObj);
    localStorage.setItem("prodArr", JSON.stringify(this.secondArr));

    let costObject = localStorage.getItem("prodArr") as string;
    let costJson = JSON.parse(costObject);
    // --iterate through for loop for each price and quantity amount, get total amount each time
    for (var i=0; i < costJson.length; i++){
      this.totalProdCost = costJson[i].costprice*costJson[i].pquantity;
    // -- add total product amount to total cart cost amount
      this.totalCartCost += this.totalProdCost;
  }
    
//---SET USER TOTAL FUNDS---------
    //this.totalFunds=100;
    //this.totalCartCost=50;
    this.leftOverAmount=this.totalFunds - this.totalCartCost;

    if(this.leftOverAmount >= 0 ){
      this.checkoutMsg = 'You have enough funds to checkout with: $'+this.leftOverAmount;
    } else {
      this.checkoutMsg = 'You do not have enough funds in your account to checkout. Please add more to your funds.'
    }

    document.getElementById("msg")!.innerHTML= this.checkoutMsg;

    
    //this.totalCartCost= this.price? * this.quantity;

    //this.leftOverAmount=this.totalFunds? - parseFloat(this.totalCartCost?);

    // this.leftOverAmount=this.totalFunds? - parseFloat(this.totalCartCost?);

    // if(this.leftOverAmount? >= 0 ){
    //   this.checkoutMsg = 'You have enough funds to checkout';
    // } else {
    //   this.checkoutMsg = 'You do not have enough funds in your account to checkout. Please add more to your funds.'
    // }

  }

}
