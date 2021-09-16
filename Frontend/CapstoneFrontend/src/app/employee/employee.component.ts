import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empid:number=0;

  constructor(public router:Router,public activateRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    //this.activateRoute.params.subscribe(data=>this.empid=data.empid)
  }

}
