import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ReuseableUserComponent } from "./components/reuseable-user/reuseable-user.component";
import { TasksComponent } from "./components/tasks/tasks.component";

// import the DUMMY_USERS array to use it in the app.component
import { DUMMY_USERS } from '../assets/dummy-users';
// @Component is a decorator that tells Angular to create a new component
// selector is the CSS selector that identifies this component in the HTML
// templateUrl is the HTML file that describes the UI of the component
// styleUrl is the CSS file that describes the styles of the component  
// export class AppComponent is the class that defines the component
// title is a property that defines the title of the component

@Component({
  selector: 'app-root',
  // can only import components when this component is standalone (standalone = true)
  // imports: [HeaderComponent, UserComponent, ReuseableUserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})

export class AppComponent {
  title = 'angular101';
  users = DUMMY_USERS;
  selectedUserId = '';
  name = '';


  // the id is emitted from the user component or the reuseable-user component
  // and app.component will set the selectedUserId and name properties based on the id
  onSelect(id: string) {
    this.selectedUserId = id;
    this.name = DUMMY_USERS.find(user => user.id === id)?.name!;  
    console.log('Selected user from app.component:', this.name);
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
}
