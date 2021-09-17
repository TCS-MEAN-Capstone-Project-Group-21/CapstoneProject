import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
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
    this.activateRoute.params.subscribe(data=>this.prodName=data.productname);
    this.activateRoute.params.subscribe(data=>this.prodPrice=data.productprice);
  }

  displayItemsOnPage() {

    let jsonAllProducts=[
      {productname:'Apples',productid:0,productprice:4.00},
      {productname:'Bananas',productid:1,productprice:5.00},
      {productname:'Oranges',productid:2,productprice:6.00}
    ];

    let body = document.querySelector('body');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let input = document.createElement('input');
    let a = document.createElement('a');

    let divInBody = body?.append(div);
    let imgInDiv = div.append(img);
    let divInImg = img.append(div);
    let h5InDiv = div.append(h5);
    let pInh5 = h5.append(p);
    let inputInP = p.append(input);
    let aInInput = input.append(a);

    a.innerHTML="";

    let startDiv = `<div class="col-sm"><div class="card" style="width: 18rem;">`;
    let imageDiv = `<img class="card-img-top" src="" alt="Card image cap">`;
    let secondDiv = `<div class="card-body">`;
    let middleDiv = ``;
    let endDiv = `</div></div></div>`;
    let wholeDivElement = ``;

    for (let i=0;i<jsonAllProducts.length;i++){
      middleDiv += `
      <h5 class="card-title">`+jsonAllProducts[i].productname+`</h5>`
      + `<p class="card-text">`+jsonAllProducts[i].productid+`</p>`
      + `<p class="card-text">`+jsonAllProducts[i].productprice+`</p>
      Quantity: <input type="text" maxlength="4" size="4" id=""/><br/><br/>
      <a href="#" class="btn btn-primary">Add Product</a>
      `;
      console.log(jsonAllProducts[i]);
    }

    wholeDivElement = startDiv+imageDiv+secondDiv+middleDiv+endDiv;
    // try this in typescript
    document.getElementById("buttontest")!.innerHTML=wholeDivElement;
 
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

  updateItems() {

  }

}
