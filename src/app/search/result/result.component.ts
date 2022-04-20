import { Ser } from './../ser';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Data } from 'src/app/data.model';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  vet!:string; // stringhe della ricerca
  vetD: Data[] = []; // vettore dati filtrati dal db

  Admin!: boolean;
  pagine: number[] = [];
  dimdb!: number; //dimdb
  indice = 0;
  caricato = false;

  constructor(private http: HttpClient, private ser: Ser , private root:Router) {}

  ngOnInit(): void {
    this.ser.Emit.subscribe((item) => this.avvio(item));
    this.ser.Log.subscribe((bool) => (this.Admin = bool));
    console.log("admin",this.Admin)
   
  }
  
  route(){
    this.root.navigate(['newData']);

  }
  setDati(dati: Data[]) {
 
    this.vetD.push(...dati);
    
    this.caricato = true;
    this.npagine();
  }

  getDati() {
    console.log('sono in getDati');
      let url = 'http://localhost:3000/ricerca';

      this.http
        .get<Data[]>(url, {
          params: {
            q: this.vet
          },
        })
        .subscribe((data) => {
          
          this.setDati(data);

        });
    


  }

  avvio(s: string) {
    this.caricato = false;
    this.pagine = [];
    this.vetD = [];
    
    this.vet = s;

    this.getDati();
    



  }
  npagine() {
    console.log("vetD_IN_npagine",this.vetD)
    let va = this.vetD.length;
    console.log("LUNGHEZZA VETD",this.vetD.length)
    console.log(va)
    va = va / 5;
    

    for (let i = 0; i < va; i++) {
      this.pagine.push(i + 1);
    }
    console.log(this.pagine);
  }

  contatore(c: number) {
    console.log("c",c)
    this.indice = 0;
    if (c === 0) {
      return;
    }
    this.indice =   (c) * 5;
  }



}
