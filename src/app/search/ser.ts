import { Subscription } from 'rxjs';
import { AuthService } from './../autenticazione/auth.service';
import { Injectable, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ser {
  Admin = true;
  
  
  vet: string[] = [];
  @Output() Emit: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() Log: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {}

  

  getVet() {
    return this.vet;
  }
  
  toString() {
    console.log(this.vet);
  }
  setMode(b: boolean) {
    this.Admin = b;
    this.Log.emit(b);
  }

  
}
