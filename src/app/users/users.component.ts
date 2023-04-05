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
  userCreatedStatus = 'No user is created';
  userName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus() {
    this.userCreatedStatus = 'User iscreated';
  }
  onUpdateUser(event: Event) {
    // console.log(event);
    this.userName=(event.target as HTMLInputElement).value;

  }
}
