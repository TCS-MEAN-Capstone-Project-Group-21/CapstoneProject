import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  msg?:string
  
  loginForm = new FormGroup({
    _id: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  constructor(
    public loginSer:AdminService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }
  attemptLogin() {
    let login = this.loginForm.value;
    console.log(login);
    this.loginSer.checkLogin(login).
    subscribe(result=>{
      if(result=="Success"){
        this.router.navigateByUrl("adminLoggedIn",{ skipLocationChange: true });
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginForm.reset();
  }
}
