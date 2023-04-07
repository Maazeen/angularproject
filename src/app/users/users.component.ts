import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  // selector: '[app-users]',
  // selector: '.app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  allowNewUser = false;
  // userCreatedStatus = 'No user is created';
  userName = 'Mazin';
  isUserCreated = false;
  users = ['user1', 'user2'];

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus() {
    this.isUserCreated = true;
    // this.userCreatedStatus = 'User iscreated';
    this.users.push(this.userName);
  }
  onUpdateUser(event: Event) {
    // console.log(event);
    this.userName = (event.target as HTMLInputElement).value;
  }
}
