import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg?:string
  
  loginForm = new FormGroup({
    _id: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  constructor(
    public loginSer:UserService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }
  attemptLogin() {
    let login = this.loginForm.value;
    console.log(login);
    this.loginSer.checkLoginDetails(login).
    subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["user",login._id]);
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginForm.reset();
  }
}
