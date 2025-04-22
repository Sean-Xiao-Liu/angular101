import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Generate a random index between 0 and the length of the DUMMY_USERS array
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  title = 'User Component';
  // This property would be available in the template
  selectedUser = DUMMY_USERS[randomIndex];

  onSelectUser(selectedUser: any) {
    this.selectedUser = selectedUser;
  }
  
  // This is a getter method that returns the image path for the selected user
  get imagePath() {
    return 'assets/images/users/' + this.selectedUser.avatar;
  }
}
