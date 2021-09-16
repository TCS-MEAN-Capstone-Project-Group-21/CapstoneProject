import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToAddEmployee(){
    this.router.navigateByUrl("addEmployee",{ skipLocationChange: true });
  }
  goToDeleteEmployee(){
    this.router.navigateByUrl("deleteEmployee",{ skipLocationChange: true });
  }
  goToAddProduct(){
    this.router.navigateByUrl("addProduct",{ skipLocationChange: true });
  }
  goToUpdateProduct(){
    this.router.navigateByUrl("updateProduct",{ skipLocationChange: true });
  }
  goToDeleteProduct(){
    this.router.navigateByUrl("deleteProduct",{ skipLocationChange: true });
  }
  goToGenerateReport(){
    this.router.navigateByUrl("adminReport",{ skipLocationChange: true });
  }
  goToViewRequest(){
    this.router.navigateByUrl("viewRequest",{ skipLocationChange: true });
  }

}
