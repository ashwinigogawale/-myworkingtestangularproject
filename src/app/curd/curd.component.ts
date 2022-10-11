import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
 

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent implements OnInit {

  constructor(public ContactService : ContactService) { }
 contactList: any;
 msgTrue=false;
  ngOnInit():void {
    this.ContactService.getcontacts().subscribe(data =>{
      this.contactList=data;
    });
  }
  addnewcontact(form){
    console.log(form.value.id);
    console.log(form.value.name);
    console.log(form.value.lastname);
    const newFormData ={id:form.value.id , name:form.value.name , lastname:form.value.lastname};
    this.ContactService.createcontact(newFormData).subscribe(data =>{
this.msgTrue= true;
console.log(data);
    })



    
  }
  updateContact(contactID){
    const newFormData ={id:contactID , name:'sona' , lastname:'go'};
    this.ContactService.updateContact(contactID,newFormData).subscribe(data =>{
      this.msgTrue=true;
    });
  }
deleteContact(contactID){
this.ContactService.deleteContact(contactID).subscribe(data => {
  this.msgTrue=true;
});
}
}
