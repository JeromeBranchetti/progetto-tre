import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class Ser {
    vet:string[]=[]

    getVet(){
      return this.vet
    }
     toString(){
       console.log(this.vet)
     }

  }