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
    product: new FormControl("",Validators.required),
    quantity: new FormControl("",Validators.required)
  })

  constructor(public sendSer:RequestService) { }

  ngOnInit(): void {
  }
  createsend(){
    let request = this.sendrequestForm.value;
    console.log(request);
    this.sendSer.sendRequest(request).
    subscribe(result=>{
      this.msg = result;
    },
      (error:any)=>console.log(error));
    this.sendrequestForm.reset();
  }
}
