import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selectitems',
  templateUrl: './selectitems.component.html',
  styleUrls: ['./selectitems.component.css']
})
export class SelectitemsComponent implements OnInit {

  products?:Array<Product>;
  userID?:number;
  
  selectedItemsRef = new FormGroup({
    userid:new FormControl(), //the name is the id name from the html page of each input/selection
    productid:new FormControl(),
    productname:new FormControl(),
    productprice:new FormControl(),
    productquantity:new FormControl()
    //totalproductamount:new FormControl()
  });

  constructor(public selectedItems:ProductService,public activateRoute:ActivatedRoute,public router:Router) { } // DI for Selected Items

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userID=data.userid);
  }

  addItemsToCart(prodname:string, prodcost:Number, prodquan:Number) {
    //obtain name, cost and quantity, calculate total amount
    // send info to database (product.model.js)

  }

  addToCart(){
    let selectItems = this.selectedItemsRef.value;
  }

  getAllItems(){
    this.selectedItems.retrieveAllProductsInfo().subscribe(result=> {
      this.products=result;  // this line is where all info of each product is (variable: products [an array])
    },error=>console.log(error));
  }

}
