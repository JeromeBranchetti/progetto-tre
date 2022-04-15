import { Ser } from './../ser';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Data } from 'src/app/data.model';
import { flattenDiagnosticMessageText } from 'typescript';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {

  vet:string[]=[]; //vettore stringhe della ricerca
  vetD:Data[]=[]; // vettore dati filtrati dal db
  Admin!:boolean
  pagine:number[]=[];
  dimdb!:number;
  indice=0;
  caricato=false;
  

  constructor(private http: HttpClient, private ser: Ser) {}


  setDati(dati:Data[]){      
     for(let i of this.vetD){
     for(let j of dati){
        if(i.id===j.id){
        
         return 
       
      }

      }}
     this.vetD.push(...dati);
     this.caricato=true;
    
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
  console.log(this.vet.length)
  }

  
  avvio(s: string[]) {
    this.caricato=false;
  this.pagine=[]
   this.vetD = [];
    console.log(s);
     this.vet = s;
     this.dimDB();
     this.getDati();
      this.npagine();
     
     
   }
   npagine(){
    let va=this.vet.length;
    va=va/5
    
    for(let i =0;i<va;i++){
      this.pagine.push(i+1)

    }
    console.log(this.pagine.length)
    
     
   }

   contatore(c:number){
    this.indice=0;
     if(c===0){
     
     return ;
     }
     this.indice=this.indice+c*5;

   }

   dimDB(){
     let v=[];

     this.http.get<Data[]>("http://localhost:3000/ricerca").subscribe(data=>{
      v=data;
      this.dimdb=v.length;
     this.dimdb=Math.ceil(this.dimdb);

     })
     
     

   }
  ngOnInit(): void {
    this.ser.Emit.subscribe((item) => this.avvio(item));
    this.Admin=this.ser.Admin;
  }
    }
