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
  Admin!: boolean;
  constructor(private ser: Ser, private http: HttpClient) {}

  ngOnInit(): void {
    this.ser.Log.subscribe((bool) => (this.Admin = bool));
    console.log(this.dato);
  }

  delete() {
    let url = 'http://localhost:3000/ricerca/' + this.dato.id;
    console.log(url);
    this.http
      .get('http://localhost:3000/ricerca')
      .subscribe((data) => console.log(data));
    this.http.delete(url).subscribe(() => {
      console.log('delete');
      delete this.ser.vet[this.dato.id - 1];
      this.ser.Emit.emit(this.ser.vet);
    });
  }
}
