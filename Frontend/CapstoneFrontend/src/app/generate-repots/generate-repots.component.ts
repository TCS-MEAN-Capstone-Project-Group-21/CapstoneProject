import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../order';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-generate-repots',
  templateUrl: './generate-repots.component.html',
  styleUrls: ['./generate-repots.component.css']
})
export class GenerateRepotsComponent implements OnInit {

  msg?:string;
  user=[];

  reportForm= new FormGroup({
    type:new FormControl("",Validators.required),
    
  })

  constructor(public userSer:UserService,public router:Router) { }

  reportType?:string;
  reports: any 
  reportGenerated:boolean = false;
  reportEmpty:boolean = false;

  ngOnInit(): void {
  }
 
  
  backToAdmin(){
    this.router.navigateByUrl("adminLoggedIn",{ skipLocationChange: true });
  }


  genReport(){
    let request = this.reportForm.value
    this.userSer.getUser()
    .subscribe(result=> {
      console.log(result);
      this.reports = result;
      this.reportGenerated = true;
      if(this.reports.length <= 0){
        this.reportEmpty = true;
      }else{
        this.reportEmpty = false;
      }
    }, error=>console.log(error));
    this.reportForm.reset();

}

}
