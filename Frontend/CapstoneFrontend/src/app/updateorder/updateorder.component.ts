import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {
  name = 'Progress Bar';

  public counts = ["Recieved","In process","Shipped","Out for Delivery",
  "Delivered"];
  public orderStatus = "Shipped"

  constructor() { }

  ngOnInit(): void {
  }

}
