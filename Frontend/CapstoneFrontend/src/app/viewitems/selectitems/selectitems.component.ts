import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import { CartService } from 'src/app/user/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { hrtime } from 'process';

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
  cartArrID:Array<number>=[];
  cartArrQty:Array<number>=[];
  
  selectedItemsRef = new FormGroup({
    userid:new FormControl(), //the name is the id name from the html page of each input/selection
    productid:new FormControl(),
    productname:new FormControl(),
    productprice:new FormControl(),
    productquantity:new FormControl()
    //totalproductamount:new FormControl()
  });

  constructor(
    public selectedItems:ProductService,
    public cartSer:CartService,
    public activateRoute:ActivatedRoute,
    public router:Router) { } // DI for Selected Items

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userID=data.userid);
    this.activateRoute.params.subscribe(data=>this.prodName=data.productname);
    this.activateRoute.params.subscribe(data=>this.prodPrice=data.productprice);
  }

  // const button = document.querySelector('input');
  // //const paragraph = document.querySelector('p');

  // button.addEventListener('click', productCard);

  random(){
  document.getElementById("disp")!.addEventListener("click", function(evt){
      return "Hello Message";
      //innerHTML="Hello message";
  });
}
  
  productCard(){
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const a = document.createElement("a");
    const img = document.createElement("img");

    const body = document.querySelector("body");
    body?.append(div);
    h4.append(a);
    div.append(h4);
    div.append(img);

    // Set content and attributes
    a.innerHTML = "Product Name";
    a.setAttribute("href", "#");
    img.setAttribute("src", "https://media.gettyimages.com/photos/selection-of-conference-pears-photographed-on-a-red-background-taken-picture-id477785561");
    div.setAttribute("class", "card");
  }

  buildProductCard=()=>{
    // Create element to build a card
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div');
    let img = document.createElement('img');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let input = document.createElement('input');
    let a = document.createElement('a');

    // Append newly created elements into the DOM
    let body = document.querySelector('body');
    body?.append(div1); // div in body
    div1.append(div2);
    div2.append(div3);
    div3.append(div4);
    div4.append(img);    // img in div
    img.append(div5);    // div in img
    div5.append(h5);      // h5 in div
    h5.append(p);          // p in h5
    p.append(input);    // input in p
    input.append(a);    // a in input

    // Set content and attributes
    div1.setAttribute('id','container');
    div2.setAttribute('class','row');
    div3.setAttribute('class','col-sm');
    div4.setAttribute('class','card');
    div4.setAttribute('style','width: 18rem;');
    img.setAttribute('class','card-img-top');
    img.setAttribute('src', 'https://media.gettyimages.com/photos/selection-of-conference-pears-photographed-on-a-red-background-taken-picture-id477785561');
    div5.setAttribute('class','card-body');
    h5.setAttribute('class','card-title');
    h5.innerHTML="Product Name";
    p.setAttribute('class','card-text');
    p.innerHTML="Product Price";
    input.setAttribute('type','text');
    input.setAttribute('id','quantity');
    a.setAttribute('href','#');
    a.setAttribute('class','btn btn-primary');
    a.innerHTML="Add Product";

  }

  displayItemsOnPage() {

    let jsonAllProducts=[
      {productname:'Apples',productid:0,productprice:4.00},
      {productname:'Bananas',productid:1,productprice:5.00},
      {productname:'Oranges',productid:2,productprice:6.00}
    ];

    
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

  addItemsToCart(pid:number,prodname:string, prodcost:Number, pquan:number) {
    let cartObject = {prodID:pid, quantity:pquan};
    this.productAfterStore?.push(cartObject);
    localStorage.setItem("prodAfterStore", JSON.stringify(this.productAfterStore));

    this.cartArrID.push(pid);
    this.cartArrQty.push(pquan);
    this.cartSer.setCart(this.cartArrID,this.cartArrQty);//--!user function from cart services (setCart)

  }

  // cart service from the user, item quantity 

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
