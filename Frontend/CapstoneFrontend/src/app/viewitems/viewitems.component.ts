import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  //OBTAIN user's product info from database
  constructor(
    public productItems:ProductService,
    public activateRoute:ActivatedRoute,
    public router:Router) { }
  
  products?:Array<Product>;
  productID?:number;
  deleteMsg?:string;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.productID=data.productid);
  }

  getAllItems(){
    this.productItems.retrieveAllProductsInfo().subscribe(result=> {
      this.products=result;  // this line is where all info of each product is (variable: products [an array])
    },error=>console.log(error));
  }

  deleteProductInfo(productid:any){
    this.productItems.deleteProductInfo(productid).subscribe(result=>{
      this.deleteMsg=result.msg;
      this.getAllItems();
    },error=>console.log(error));
  }

}
