import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  msg?:string

  constructor() { }
  deleteEmployeeForm = new FormGroup({

  })

  ngOnInit(): void {
  }

  removeEmployee(){
    
  }

}
