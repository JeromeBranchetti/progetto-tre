import { Ser } from './../search/ser';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  admin = false;

  constructor(private ser: Ser) {}

  ngOnInit(): void {}
  modeAdmin() {
    this.admin = !this.admin;
    this.ser.setMode(this.admin);
  }
}
