import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
 orderStatus : any;
 data:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    new Observable(observe => {
      setTimeout(()=>{
        observe.next("IN progress");
      },3000);

      setTimeout(()=>{
        observe.next(" processing");
      },5000);

      setTimeout(()=>{
        observe.next("complete");
      },8000);
    }).subscribe(val => {
      this.orderStatus=val;
    });
  }

}
