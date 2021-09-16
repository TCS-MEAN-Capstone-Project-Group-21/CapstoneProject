import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../order';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-generate-repots',
  templateUrl: './generate-repots.component.html',
  styleUrls: ['./generate-repots.component.css']
})
export class GenerateRepotsComponent implements OnInit {

  reports:Array<Report>=[];
  msg?:string;
  user=[];

  reportForm= new FormGroup({
    type:new FormControl("",Validators.required),
  })

  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }
  genReport(){
    let request = this.reportForm.value
    if(request.type=="daily"){
      this.dailyReport(request);
    }
    else if(request.type=="weekly"){
      this.weekReport(request);
    }
    else{
      this.monthlyReport(request);
    }
    this.userSer.getUser().
    subscribe(result=>{
      this.reports=result;
      this.msg = `${this.reports[0].fname}`;
    },
    error=>console.log(error));
  }
  dailyReport(request:any){

  }
  weekReport(request:any){

  }
  monthlyReport(request:any){

  }
  productReport(request:any){

  }
  userReport(request:any){

  }
}

class Report{
  fname?:string
}
