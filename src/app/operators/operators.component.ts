import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  myArray = [10,20,30]
  arrayOf:Observable<any>;
  arrayFrom:Observable<any>;
  arrayTap:Observable<any>;
  arrayMap:Observable<any>;



  constructor() { }

  ngOnInit(): void {

    
    // .............OF..................


      // 1. OF es usado para convertir convertir datos en un observable
    this.arrayOf = of(this.myArray)

      // 2. Ya cuando tengo un observable me puedo subscribir a el
    this.arrayOf.subscribe(data=>console.log(data))


    // ................FROM ....................

      // 1. Con from puedo convertir una promesa en un observable.
    this.arrayFrom = from(this.myArray)
    
      // 2. Devuelve cada uno de los datos del arreglo por separado.
    this.arrayFrom.subscribe(data =>console.log(data, 'desde from'))
  
    
    // ...............TAP....................
      // 1. Para usar los operadores debemos de llamar la función pipe 
    
    this.arrayTap = of(this.myArray)


    // 2. Tap permite recorrer cada uno de los elementos del arreglo
    this.arrayTap.pipe(tap(res=>{return res*2})).subscribe(res=>console.log(`${res} desde Tap`))
    
    // 3.Funcionan similar a los metodos de array, en Map puede realizar una operación a cada uno de los iterables
    this.arrayMap = from(this.myArray); 
    this.arrayMap.pipe(map(res=>res*2)).subscribe((res)=>console.log(res, 'Desde Map'))
  }

}
