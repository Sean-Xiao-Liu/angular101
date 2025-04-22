import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Generate a random index between 0 and the length of the DUMMY_USERS array
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  title = 'User Component';
  // This is a property that is initialized with the result of the getRandomIndex method
  randomIndex = this.getRandomIndex;
  // This is a property that is initialized with the result of the DUMMY_USERS array at the index of the randomIndex property
  selectedUser = DUMMY_USERS[this.randomIndex];

  // This is a method that selects a user
  onSelectUser() {
    // const randomIndex = this.getRandomIndex;
    this.randomIndex = this.getRandomIndex;
    this.selectedUser = DUMMY_USERS[this.randomIndex];
    console.log('Selected user:', this.selectedUser.name);
  }

  // This is a getter method that returns the image path for the selected user
  get imagePath() {
    return 'assets/images/users/' + this.selectedUser.avatar;
  }

  // This is a getter method that returns a random index
  // 'get' is used to get the value of the property, which is ne
  get getRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
