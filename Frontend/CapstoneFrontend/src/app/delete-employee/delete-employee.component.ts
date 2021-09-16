import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  msg?:string

  constructor(public employeeSer:EmployeeService) { }
  deleteEmployeeForm = new FormGroup({
    _id: new FormControl("",Validators.required),
  })

  ngOnInit(): void {
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
