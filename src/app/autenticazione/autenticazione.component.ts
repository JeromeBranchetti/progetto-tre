import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-autenticazione',
  templateUrl: './autenticazione.component.html',
  styleUrls: ['./autenticazione.component.css']
})
export class AutenticazioneComponent implements OnInit {

 reCostructor=new RegExp("[a-zA-Z]{4,}[0-9]*[^\w]", "g")
 errore=false;

  constructor() {
    



//});
   }

  ngOnInit(): void {
    
    
    
  }
MathPassword(control: FormControl){

}
login(){

}
registrati(s:string){
  console.log(s);
  console.log(this.reCostructor.test(s));
  if(!this.reCostructor.test(s)){
    this.errore=true;
  }

 

}
}
