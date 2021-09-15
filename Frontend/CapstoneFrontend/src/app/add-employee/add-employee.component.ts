import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  msg?:string;
  constructor() { }

  addEmployeeForm = new FormGroup({

  })
  ngOnInit(): void {
  }
  addEmployee(){

  }

}
