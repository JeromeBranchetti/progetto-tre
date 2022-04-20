import { Ser } from './../search/ser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../autenticazione/auth.service';
import { Subscriber, Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  admin = false;
  userSub!: Subscription;
  isAuthenticated = false;

  constructor(private ser: Ser, private authService: AuthService) {}
  

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user; //!user ? false : true
      console.log(!user);
      console.log(!!user);
    });
  }

  modeAdmin() {
    this.admin = !this.admin;
     this.ser.setMode(this.admin);
     this.ser.Log.emit(this.ser.Admin);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe;
  }

}
