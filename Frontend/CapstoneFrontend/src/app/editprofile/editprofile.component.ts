import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  msg?:string;
  editForm = new FormGroup({
    
    password: new FormControl("",Validators.required)
   
  })

  constructor(public sendSer:EmployeeService) { }

  ngOnInit(): void {
  }
  editemp(){
    let user = this.editForm.value;
    console.log(user);
    this.sendSer.editemp(user).
    subscribe((result: string | undefined)=>{
      this.msg = result;
    },
      (    error: any)=>console.log(error));
    this.editForm.reset();
  }
  

}