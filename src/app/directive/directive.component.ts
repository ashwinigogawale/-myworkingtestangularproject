import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  products:any;
  bdr:number=5;
  public color="green";
  cols:number=3;
  isvalid:boolean=true;
  changevalue(valid){
    this.isvalid=valid;
    
  }
  constructor() {
    this.products=[
      {
        "id":1,
        "name":"watch",
        "price":700

      },
      {
        "id":2,
        "name":"perfume",
        "price":500

      },
      {
        "id":3,
        "name":"t-shirt",
        "price":400

      }
    ]
   }

  ngOnInit(): void {
  }

}
