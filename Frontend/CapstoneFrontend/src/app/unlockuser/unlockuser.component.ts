import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Raiseticket } from '../raiseticket';

@Component({
  selector: 'app-unlockuser',
  templateUrl: './unlockuser.component.html',
  styleUrls: ['./unlockuser.component.css']
})
export class UnlockuserComponent implements OnInit {
  userList:Array<Raiseticket>=[];
  userId:string | undefined;

  constructor( private _router:Router, private _httpClient:HttpClient) { }

  ngOnInit(): void {
   

    this._httpClient.get<Raiseticket[]>('http://localhost:9090/api/raiseticket/getTickets').subscribe(results=>{
      this.userList = results;

    }, error=>{
      console.log(error);
    });
  }
}
