import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  msg?:string;
  constructor(public employeeSer:EmployeeService) { }

  addEmployeeForm = new FormGroup({
    fname: new FormControl("",Validators.required),
    lname: new FormControl("",[Validators.required]),
    email: new FormControl("",Validators.required)
  })

  ngOnInit(): void {
  }
  
  addEmployee(){
    let employee = this.addEmployeeForm.value;
    console.log(employee);
    this.employeeSer.addNewEmployee(employee).
    subscribe(result=>{
      this.msg = result;
    },
    error=>console.log(error));
    this.addEmployeeForm.reset();
  }

}
