import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userName: string = 'mazin';
  userStatus: string;

  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getUserStatus() {
    return this.userStatus;
  }
  getColor() {
    if (this.userStatus === 'online') {
      return 'blue';
    }
    return 'red';
  }
}
