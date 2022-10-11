import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getcontacts(){
//http call here
const contactList =[
  {id:1,name:'abc'},
  {id:2,name:'ash'},
  {id:3,name:'mayur'},
];
return contactList;
  }
}
