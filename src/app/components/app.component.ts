import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ReuseableUserComponent } from "./reuseable-user/reuseable-user.component";
// import the DUMMY_USERS array to use it in the app.component
import { DUMMY_USERS } from './dummy-users';
// @Component is a decorator that tells Angular to create a new component
// selector is the CSS selector that identifies this component in the HTML
// templateUrl is the HTML file that describes the UI of the component
// styleUrl is the CSS file that describes the styles of the component  
// export class AppComponent is the class that defines the component
// title is a property that defines the title of the component

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, ReuseableUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular101';
  users = DUMMY_USERS;
}
