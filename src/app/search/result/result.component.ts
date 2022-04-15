import { Ser } from './../ser';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Data } from 'src/app/data.model';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
<<<<<<< HEAD
  vet:string[]=[]; //vettore stringhe della ricerca
  vetD:Data[]=[]; // vettore dati filtrati dal db
=======
  vet: string[] = []; //array di stringhe della ricerca
  vetD: Data[] = []; //array dei dati filtrati dal db
>>>>>>> da2f7d23c8ba57b1f3ca87e5d6dc4d11601e4a88

  constructor(private http: HttpClient, private ser: Ser) {}

<<<<<<< HEAD
  setDati(dati:Data[]){
     for(let i of this.vetD){
    for(let j of dati){
       if(i.id===j.id){
        
         return 
       
       }

     }}
    this.vetD.push(...dati);
    
  }
   
  
  getDati(){
   
     console.log("sono in getDati")
      
    for(let  i=0 ; i<this.vet.length;i++){
     console.log("dentro il for")
      let url="http://localhost:3000/ricerca"
      
      this.http.get<Data[]>(url,{params:{
         q:this.vet[i]
       }}).subscribe(data=>{
        
        this.setDati(data);
       
        
    })}
  console.log("fineGetDati")
  console.log("vetD")
  console.log(this.vetD)
 }
    avvio(s:string[]){
      this.vetD=[];
      console.log(s)
      this.vet=s;
      this.getDati();
=======
  setDati(dati: Data[]) {
    for (let i of this.vetD) {
      for (let j of dati) {
        if (i.id === j.id) {
          return;
        }
      }
>>>>>>> da2f7d23c8ba57b1f3ca87e5d6dc4d11601e4a88
    }
    this.vetD.push(...dati);
  }

  getDati() {
    console.log('sono in getDati');

    for (let i = 0; i < this.vet.length; i++) {
      console.log('dentro il for');
      let url = 'http://localhost:3000/ricerca';

      this.http
        .get<Data[]>(url, {
          params: {
            q: this.vet[i],
          },
        })
        .subscribe((data) => {
          this.setDati(data);
          //promise
        });
    }
    console.log('fineGetDati');
    console.log('vetD');
    console.log(this.vetD);
  }
  avvio(s: string[]) {
    this.vetD = [];
    console.log(s);
    this.vet = s;
    this.getDati();
  }

  ngOnInit(): void {
    this.ser.Emit.subscribe((item) => this.avvio(item));
  }
}
