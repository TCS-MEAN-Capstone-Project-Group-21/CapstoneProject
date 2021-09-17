import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  msg?:string;
  reports:Array<Order>=[]

  reportForm= new FormGroup({
    type:new FormControl("",Validators.required),
    date:new FormControl("",Validators.required),
    userId:new FormControl(""),
    productId:new FormControl(""),
    
  })

  constructor(public orderSer:OrderService,public router:Router) { }

  reportType?:string;
  reportGenerated:boolean = false;
  reportEmpty:boolean = false;

  ngOnInit(): void {
  }
 
  
  backToAdmin(){
    this.router.navigateByUrl("adminLoggedIn",{ skipLocationChange: true });
  }


  genReport(){
    let request = this.reportForm.value
    this.orderSer.genReports(request)
    .subscribe(result=> {
      console.log(result);
      this.reports = result;
    }, error=>console.log(error));
    this.reportForm.reset();

}

}
