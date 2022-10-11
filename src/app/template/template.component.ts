import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
title='Template driven form';
@Input() myinput:String;
@Output() myoutput:EventEmitter<string>=new EventEmitter();
outputstring="HI i am your child";
  constructor(private ServiceService :ServiceService) { }
contactList =[];
  ngOnInit(): void {
    this.contactList = this.ServiceService.getcontacts();
    console.log(this.myinput);
  }
onsubmit(regForm:any){
  console.log(regForm);
}
senddata(){
  this.myoutput.emit(this.outputstring);
}
}
