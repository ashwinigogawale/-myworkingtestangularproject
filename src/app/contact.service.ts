import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }
  getcontacts(){
    const httpHeaders= new HttpHeaders();
    httpHeaders.append('content-type','application/json');
  return  this.httpClient.get('http://localhost:3000/contacts');
  }
  createcontact(resource){
    const httpHeaders= new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return  this.httpClient.post('http://localhost:3000/contacts',resource,{ headers:httpHeaders});
    }
    updateContact(contactid, updatedbody){
      const endpointURL='http://localhost:3000/contacts/' + contactid;
      return this.httpClient.put(endpointURL,updatedbody);
    }
    deleteContact(contactid){
      const deleteEndpoint='http://localhost:3000/contacts/' + contactid;
      return this.httpClient.delete(deleteEndpoint);
    }
}
