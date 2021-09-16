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

  productAfterStore?:Array<any>;
  products?:Array<Product>;
  userID?:number;
  prodName?:String;
  prodPrice?:number;
  
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

  displayItemsOnPage() {
    // Supposing you already have queried the API and have your data
    let data = [
      {name: 'name0', description: 'description', date: 'XX/XX/XXXX'},
      {name: 'name1', description: 'description', date: 'XX/XX/XXXX'},
      {name: 'name2', description: 'description', date: 'XX/XX/XXXX'},
  ]

  data.forEach(res => {
      let card = document.createElement("div");

      let name = document.createTextNode('Name:' + res.name + ', ');
      card.appendChild(name);

      let description = document.createTextNode('Description:' + res.description + ', ');
      card.appendChild(description);

      let date = document.createTextNode('date:' + res.date);
      card.appendChild(date);

      let container = document.querySelector("#container");
      container?.appendChild(card);
  });
  }

  addItemsToCart(pid:Number,prodname:string, prodcost:Number, pquan:Number) {
    //obtain name, cost and quantity, calculate total amount
    // send info to database (product.model.js)
    let cartObject = {prodID:pid, quantity:pquan};
    this.productAfterStore?.push(cartObject);
    localStorage.setItem("prodAfterStore", JSON.stringify(this.productAfterStore));

  }

  addToCart(){
    let selectItems = this.selectedItemsRef.value;
  }

  getAllItems(){
    this.selectedItems.retrieveAllProductsInfo().subscribe(result=> {
      this.products=result;  // this line is where all info of each product is (variable: products [an array])
    },error=>console.log(error));

    let productObj = localStorage.getItem("prodAfterStore") as string;
    let prodJson = JSON.parse(productObj);
    
                          //adding to Product(class) Array
    this.products = [
      this.userID,        //the name is the id name from the html page of each input/selection
      prodJson.prodID,
      this.prodName,
      this.prodPrice,
      prodJson.quantity
    ]
  }

}
