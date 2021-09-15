import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectitems',
  templateUrl: './selectitems.component.html',
  styleUrls: ['./selectitems.component.css']
})
export class SelectitemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addItemsToCart(prodname:string, prodcost:Number, prodquan:Number) {
    //obtain name, cost and quantity, calculate total amount
    // send info to database (product.model.js)

  }

}
