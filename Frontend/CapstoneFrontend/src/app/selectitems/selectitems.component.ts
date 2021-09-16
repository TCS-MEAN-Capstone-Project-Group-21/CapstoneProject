import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-selectitems',
  templateUrl: './selectitems.component.html',
  styleUrls: ['./selectitems.component.css']
})
export class SelectitemsComponent implements OnInit {

  selectedItemsRef = new FormGroup({
    userid:new FormControl(), //the name is the id name from the html page of each input/selection
    productid:new FormControl(),
    productname:new FormControl(),
    productprice:new FormControl(),
    productquantity:new FormControl()
    //totalproductamount:new FormControl()
  });

  constructor(public selectedItems:ProductService) { } // DI for Selected Items

  ngOnInit(): void {
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
