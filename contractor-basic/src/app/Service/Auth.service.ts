import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  validateLogin(user: any) {
    let usersArray = [];
    if (localStorage.getItem('Users')) {
      usersArray = JSON.parse(localStorage.getItem('Users') as string);
    }
    return usersArray.find((u: { userName: any; password: any; }) => u.userName === user.userName && u.password === user.password);
  }
}
