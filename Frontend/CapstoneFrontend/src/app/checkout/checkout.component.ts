import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { CartService } from '../user/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userid=-1;
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
  
  constructor(
    public productItems:ProductService,
    public userSer:UserService,
    public cartSer:CartService,
    public activateRoute:ActivatedRoute,
    public router:Router) { }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userid=data.userid);
    this.activateRoute.params.subscribe(data=>this.pid=data.productid);
    this.activateRoute.params.subscribe(data=>this.price=data.productprice);
    this.activateRoute.params.subscribe(data=>this.quantity=data.productquantity);
  }

  checkout(){
    // add order user id, total cost, items (product), pass in to arays (item ID, item qunatity
    // follow the order model, get it with pings to the backend 
    //submit order, ping backend, create updated user funds (nothing from backend)
// service request json data, pull what it needs  as json data, 


  }

  stay(){

  }

  checkFunds(){
    //deduct the amount of money present in the user's funds
    // if user does not have sufficient amount, user will get an error message
    // if user has sufficient amount, user will have their order placed ("your order has been placed")
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
    this.leftOverAmount=this.totalFunds - this.totalCartCost;

    if(this.leftOverAmount >= 0 ){
      this.checkoutMsg = 'You have enough funds to checkout with: $'+this.leftOverAmount;
    } else {
      this.checkoutMsg = 'You do not have enough funds in your account to checkout. Please add more to your funds.'
    }
    document.getElementById("msg")!.innerHTML= this.checkoutMsg;
  }

}
