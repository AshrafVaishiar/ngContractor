import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertifyService } from 'src/app/Service/alertify.service';
import { AuthService } from 'src/app/Service/Auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private auth: AuthService,
    private alertify: AlertifyService,
    private router: Router) {}

  ngOnInit() {}

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    const authResponse = this.auth.validateLogin(loginForm.value);
    if(authResponse){
      localStorage.setItem("token",authResponse.userName);
      this.alertify.success("Login Successfull");
      this.router.navigate(["/"]);
    }
    else{
      this.alertify.error("Login Unsuccessfull");
    }
  }
}
