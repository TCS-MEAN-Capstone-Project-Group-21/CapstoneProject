import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  msg?:string

  constructor(public employeeSer:EmployeeService, public router:Router) { }
  deleteEmployeeForm = new FormGroup({
    _id: new FormControl("",Validators.required),
  })

  ngOnInit(): void {
  }

  backToAdmin(){
    this.router.navigateByUrl("adminLoggedIn",{ skipLocationChange: true });
  }

  removeEmployee(){
    let employee = this.deleteEmployeeForm.value;
    console.log(employee);
    this.employeeSer.deleteEmployee(employee).
    subscribe(result=>{
      this.msg = result;
    },
    error=>console.log(error));
    this.deleteEmployeeForm.reset();
  }

}
