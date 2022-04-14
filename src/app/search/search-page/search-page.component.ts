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
  this.service.vet=s.split(" ");
  
  
  this.route.navigate(['result']);
  

  }
  ngOnInit(): void {
  }

}
