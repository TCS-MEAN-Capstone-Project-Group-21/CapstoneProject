import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  msg?:string;
  updateForm = new FormGroup({
    prodId:new FormControl(),
    prodPrice: new FormControl(),
    prodQuantity: new FormControl()
    
  })
  

  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
  }

  updateProduct() {
    let updatedProduct = this.updateForm.value;
    console.log(updatedProduct);
    this.productSer.updateProduct(updatedProduct)
    .subscribe(result=>this.msg=result,error=>console.log(error));
    this.updateForm.reset();
  }

}
