import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-deleteitems',
  templateUrl: './deleteitems.component.html',
  styleUrls: ['./deleteitems.component.css']
})
export class DeleteitemsComponent implements OnInit {

  //figure outhow to obtain user's product info stored from database to 
  // turn into variables on this page
  selectedItemsRef = new FormGroup({
    userid:new FormControl(), //the name is the id name from the html page of each input/selection
    productid:new FormControl(),
    productname:new FormControl(),
    productprice:new FormControl(),
    productquantity:new FormControl()
    //totalproductamount:new FormControl()
  });

  deleteMsg?:string;
  products?:Array<Product>;

  constructor(public productItems:ProductService) { }

  ngOnInit(): void {
  }

  getAllItems(){
    this.productItems.retrieveAllProductsInfo().subscribe(result=> {
      this.products=result;  // this line is where all info of each product is (variable: products [an array])
    },error=>console.log(error));
  }

  deleteProductInfo(productid:any){
    //console.log(cid);
    this.productItems.deleteProductInfo(productid).subscribe(result=>{
      this.deleteMsg=result.msg;
      this.getAllItems();
    },error=>console.log(error));
  }

}
