import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Service/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUser: string | undefined;
  constructor(private alertify: AlertifyService) {}

  ngOnInit() {}

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token') as string;
    return this.loggedInUser;
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.success("You're logged out")
  }
}
