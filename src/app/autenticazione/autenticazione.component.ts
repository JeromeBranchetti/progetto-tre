import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autenticazione',
  templateUrl: './autenticazione.component.html',
  styleUrls: ['./autenticazione.component.css'],
})
export class AutenticazioneComponent implements OnInit {
  loginMode: boolean = true;
  reCostructor = new RegExp('[a-zA-Z]{4,}[0-9]*[^w]', 'g');
  error!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  MathPassword(control: FormControl) {}

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const user = form.value.user;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    // if(this.loginMode) {
    authObs = this.authService.logIn(user, password);
    // }
    // else {
    //   // authObs = this.authService.signUp(email, password);
    // }

    authObs.subscribe(
      (respData) => {
        console.log(respData);
        this.router.navigate(['./result'])
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
    form.reset();
  }
}
