import { Router } from '@angular/router';
import { Ser } from './../search/ser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../autenticazione/auth.service';
import { Subscriber, Subscription, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  admin = false;
  userSub!: Subscription;
  isAuthenticated = false;

  constructor(
    private ser: Ser,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user; //!user ? false : true
    });
  }

  modeAdmin() {
    this.admin = !this.admin;
    this.ser.setMode(this.admin);
  }

  OnLogOut() {
    this.authService.user.next(null);
    this.router.navigate(['./result']);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe;
  }
}
