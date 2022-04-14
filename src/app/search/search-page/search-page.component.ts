import { Ser } from './../ser';

import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(public service:Ser,private route: Router) { }

 find(s:string){
  
   s=s.trim();
  console.log(s)
  let v=s.split(" ");
  this.service.vet=v;
  
  this.service.Emit.emit(v);
  
  
  //  this.route.navigate(['result']);
  

  }
  ngOnInit(): void {
  }

}
