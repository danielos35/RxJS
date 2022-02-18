import { Component, OnInit } from '@angular/core';

// 1. Importar la libreria
import { Observable, Observer, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.subscribir()
  }



  // 2. Generamos el OBSERVER
  myObserver:Observer<any> = {
      next: (x:any) => {
        if(!isNaN(x)){
          console.log(x+10);
        }else{
          console.log(`'${x}': no es un Numero`);
        }

      },

      error: (x:any) =>{ console.error('Te equivocaste')
      // Cuando se detecta un error se cancelan las ejecuciones
      },
      complete: () =>{
        console.log('Completado');
      // Cuando se detecta un complet para la ejecución
        
      }
}



// 3. Generamo el OBSERVABLE
myObservable = new Observable(
  
  // 4. Generar el subscriptor
  subscriber =>{
    subscriber.next(12);
    subscriber.next(20);
    subscriber.next('HOLA MUNDO');
    subscriber.error('Error');
  }
); 



myObservableDos = new Observable(

  subscriber => {
    subscriber.complete(); 
  }

)


subscribir(){
  this.myObservable.subscribe(this.myObserver); 
  this.myObservableDos.subscribe(this.myObserver); 

}
}
