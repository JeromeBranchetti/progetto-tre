import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/data.model';

@Component({
  selector: 'app-schede',
  templateUrl: './schede.component.html',
  styleUrls: ['./schede.component.css']
})
export class SchedeComponent implements OnInit {
  @Input() dato!:Data;
  constructor() { }

  ngOnInit(): void {
  }

}
