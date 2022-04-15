import { Injectable, Output,EventEmitter} from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  export class Ser {
    Admin=false;
    vet:string[]=[]
    @Output() Emit:EventEmitter<string []> =new EventEmitter<string[]>();


    getVet(){
      return this.vet
    }
     toString(){
       console.log(this.vet)
     }

  }