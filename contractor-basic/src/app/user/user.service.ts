import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  addUser(User: User) {
    let users: Array<{}> = [{}];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') as string);
      users = [...users, User];
    } else {
      users = [User];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
