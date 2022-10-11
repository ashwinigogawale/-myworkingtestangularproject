import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  `]
})
export class BindingComponent implements OnInit {
  title = 'interpolution';
  title1 = 'property binding';
  title2 ='attribute binding';
  type='text';
  firstname:string ='Ashwini';
  lastname:string ='Gogawale';
  a:number =10;
  b:number =20;
  cols:number=3;
  bdr:number=2;
  data:string='mayur';
  data1:string="kad";
  color:string="red";
  succesclass="text-success";
  error="text-danger";
  public date=new Date();
  constructor() { }
onclick(){
  console.log("welocome");
}
show(){
  alert("hello user");
}
  ngOnInit(): void {
  }

}
