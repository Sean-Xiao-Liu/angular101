import { Component, signal, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../../assets/dummy-users';
import { CardComponent } from '../shared/card/card.component';
// Generate a random index between 0 and the length of the DUMMY_USERS array
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Output() select = new EventEmitter<string>();

  title = 'User Component';
  // This is a property that is initialized with the result of the getRandomIndex method
  randomIndex = this.getRandomIndex;
  // This is a property that is initialized with the result of the 
  // DUMMY_USERS array at the index of the randomIndex property
  // The signal is used to create a signal that is used to store the selected user
  selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  // This is a method that selects a user
  onSelectUser() {
    // const randomIndex = this.getRandomIndex;
    this.randomIndex = this.getRandomIndex;
    // update the selectedUser signal with the new random index
    // have to use the set method to update the signal
    this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
    // the reason to call this.selectedUser() is because the signal is a function
    console.log('Selected user:', this.selectedUser().name);
    this.select.emit(this.selectedUser().id);
  }

  // This is a getter method that returns the image path for the selected user
  get imagePath() {
    return 'assets/images/users/' + this.selectedUser().avatar;
  }

  // This is a getter method that returns a random index
  // 'get' is used to get the value of the property, which is ne
  get getRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
