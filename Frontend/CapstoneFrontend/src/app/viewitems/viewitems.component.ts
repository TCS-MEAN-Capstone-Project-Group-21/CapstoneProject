import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayTable(){
    // let product = localStorage.getItem("productArray");
    // let productJson = JSON.parse(product);

    // console.log("Test item: " + productJson[1].name)
    // console.log("Test item price: " + productJson[1].price)

    //--OBTAIN USER SELECTED ITEMS FROM DATABASE--

    // let insertContent="";

    // for (let i=0; i < productJson.length; i++){
    //     insertContent += 
    //     `<tr>
    //         <td>${productJson[i].name}</td> 
    //         <td>${productJson[i].price}</td>
    //         <td>${productJson[i].quantity}</td> 
    //         <td>${productJson[i].totalprice}</td> 
    //     </tr>`;
    // }

    // document.getElementById("checkoutTable").innerHTML=insertContent;

    // displayTotalAmount();

}

}
