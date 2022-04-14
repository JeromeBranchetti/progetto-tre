import { Ser } from './../ser';
import { HttpClient} from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Data } from 'src/app/data.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  vet:string[]=[];
  vetD:Data[]=[];

  constructor(private http:HttpClient, private ser:Ser) { }

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
       //promise
    })}
  console.log("fineGetDati")
  console.log(this.vetD)
 }
    

  
  ngOnInit(): void {
    this.vet=this.ser.getVet();
     this.getDati();

  }

}
