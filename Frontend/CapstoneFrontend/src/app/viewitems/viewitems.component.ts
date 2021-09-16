import { Component, OnInit } from '@angular/core';
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
  constructor(public productItems:ProductService,public activateRoute:ActivatedRoute,public router:Router) { }
  
  products?:Array<Product>;
  productID?:number;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.productID=data.productid);
  }



}
