import { Injectable, Output,EventEmitter} from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  export class Ser {
    Admin=false;
    vet:string[]=[]
    @Output() Emit:EventEmitter<string []> =new EventEmitter<string[]>();
    @Output() Log:EventEmitter<boolean> =new EventEmitter<boolean>();


    getVet(){
      return this.vet
    }
     toString(){
       console.log(this.vet)
     }
     setMode(b:boolean){
       this.Admin=b;
       this.Log.emit(b);
     }
  }