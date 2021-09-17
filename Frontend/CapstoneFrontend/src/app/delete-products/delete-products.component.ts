import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  msg?:string;
  constructor(public productSer:ProductService, public router:Router) { }

  deleteProductForm = new FormGroup({
    _id: new FormControl("",Validators.required)
  })

  ngOnInit(): void {
  }

  
  backToAdmin(){
    this.router.navigateByUrl("adminLoggedIn",{ skipLocationChange: true });
  }
  
  deleteProduct(){
    let employee = this.deleteProductForm.value;
    console.log(employee);
    this.productSer.deleteProductInfo(employee._id).
    subscribe(result=>{
      this.msg = result;
    },
    error=>console.log(error));
    this.deleteProductForm.reset();
  }

}
