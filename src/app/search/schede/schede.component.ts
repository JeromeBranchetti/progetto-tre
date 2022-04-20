import { ResultComponent } from './../result/result.component';
import { HttpClient } from '@angular/common/http';
import { Ser } from './../ser';
import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/data.model';


@Component({
  selector: 'app-schede',
  templateUrl: './schede.component.html',
  styleUrls: ['./schede.component.css'],
})
export class SchedeComponent implements OnInit {
  @Input() dato!: Data;
  Admin=false;
  constructor(private ser: Ser, private http: HttpClient ,private res:ResultComponent) {}

  ngOnInit(): void {
    this.ser.Log.subscribe((bool) => (this.Admin = bool));
    console.log(this.dato);
  }

  delete() {
    console.log(this.res.vetD)
    let url = 'http://localhost:3000/ricerca/' + this.dato.id;
    this.http.delete(url).subscribe(() => {
      console.log('delete');
    let n=this.res.vetD.indexOf(this.dato);
    this.ser.Emit.emit(this.ser.s)
     
      
    });
  }
}
