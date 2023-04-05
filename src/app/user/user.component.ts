import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userName: string = 'mazin';
  userStatus: string = 'Online;';

  getUserStatus() {
    return this.userStatus;
  }
}
