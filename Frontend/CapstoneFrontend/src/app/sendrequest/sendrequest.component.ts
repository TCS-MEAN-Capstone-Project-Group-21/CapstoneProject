import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-sendrequest',
  templateUrl: './sendrequest.component.html',
  styleUrls: ['./sendrequest.component.css']
})
export class SendrequestComponent implements OnInit {
 
  msg?:string;
  sendrequestForm = new FormGroup({
    
    items: new FormControl("",Validators.required),
    productquantity: new FormControl("",Validators.required)
   
  })

  constructor(public sendSer:EmployeeService) { }

  ngOnInit(): void {
  }
  createsend(){
    let user = this.sendrequestForm.value;
    console.log(user);
    this.sendSer.sendrequestDetails(user).
    subscribe((result: string | undefined)=>{
      this.msg = result;
    },
      (    error: any)=>console.log(error));
    this.sendrequestForm.reset();
  }
}
