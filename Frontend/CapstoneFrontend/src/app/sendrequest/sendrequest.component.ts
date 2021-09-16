import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../request.service';

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

  constructor(public sendSer:RequestService) { }

  ngOnInit(): void {
  }
  createsend(){
    let request = this.sendrequestForm.value;
    console.log(request);
    this.sendSer.sendRequest(request).
    subscribe((result: string | undefined)=>{
      this.msg = result;
    },
      (    error: any)=>console.log(error));
    this.sendrequestForm.reset();
  }
}
