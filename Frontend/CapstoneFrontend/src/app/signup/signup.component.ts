import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    fname: new FormControl("",Validators.required),
    mname: new FormControl("",),
    lname: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.maxLength(10),
      Validators.pattern("^[0-9]*$"),Validators.minLength(10),
      Validators.required]),
    birth: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  createUser(){

  }

}
