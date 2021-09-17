import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  msg?:string;
  constructor(public productSer:ProductService, public router:Router) { }

  addProductForm = new FormGroup({
    name: new FormControl("",Validators.required),
    price: new FormControl("",[Validators.required]),
    quantity: new FormControl("",Validators.required)
  })

  ngOnInit(): void {
  }
  
  backToAdmin(){
    this.router.navigateByUrl("adminLoggedIn",{ skipLocationChange: true });
  }
  
  addProduct(){
    let product = this.addProductForm.value;
    console.log(product);
    this.productSer.addNewProduct(product).
    subscribe(result=>{
      this.msg = result;
    },
    error=>console.log(error));
    this.addProductForm.reset();
  }
}
