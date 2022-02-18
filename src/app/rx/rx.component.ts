import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {

  constructor() {}

  // 1. Con interval le indico cada cuanto se ejecuta la acción
  number:Observable<number> = interval(2000)



  ngOnInit(): void {

    // 2. Se realiza la subscripción al observable 
    this.number.subscribe(res=> console.log(res))
  }

}
