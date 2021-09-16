import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  //OBTAIN user's product info from database
  constructor(public productItems:ProductService) { }
  
  products?:Array<Product>;

  ngOnInit(): void {
  }



}
