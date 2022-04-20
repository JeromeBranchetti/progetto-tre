import { Ser } from './../search/ser';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { Data } from '../data.model';


@Component({
  selector: 'app-new-data',
  templateUrl: './new-data.component.html',
  styleUrls: ['./new-data.component.css']
})
export class NewDataComponent implements OnInit {
Admin!:boolean;
id!:number
dato_form=new FormGroup({
chiavi:new FormControl(null,Validators.required),
titolo:new FormControl(null,Validators.required),
descrizione:new FormControl(null,Validators.required),
url: new FormControl(null,Validators.required)
})

  constructor(private http:HttpClient,private ser:Ser) { 
    
  }

  ngOnInit(): void {
    this.ser.Log.subscribe((bool)=> this.Admin=bool)

    

  }
 
  dimDB() {
    let v = [];

    this.http.get<Data[]>('http://localhost:3000/ricerca').subscribe((data) => {
      v = data;
    
      this.id = v.length;
      this.id = Math.ceil(this.id);
      
      
    });
  }
  aggiungi(titolo:string,chiavi:string,descrizione:string,url:string){
    let dato:Data =new Data(chiavi,this.id,titolo,descrizione,url);
    this.http.post('http://localhost:3000/ricerca',dato).subscribe(()=> alert("CARICATO"))

  }
}
