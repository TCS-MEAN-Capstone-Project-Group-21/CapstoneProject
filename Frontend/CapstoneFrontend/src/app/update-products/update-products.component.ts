import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  updateForm = new FormGroup({
    
  })
  

  constructor() { }

  ngOnInit(): void {
  }

  updateProduct(){
    
  }

}
