import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  //OBTAIN user's product info from database
  constructor(public productItems:ProductService) { }

  ngOnInit(): void {
  }



}
