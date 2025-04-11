import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
// @Component is a decorator that tells Angular to create a new component
// selector is the CSS selector that identifies this component in the HTML
// templateUrl is the HTML file that describes the UI of the component
// styleUrl is the CSS file that describes the styles of the component  
// export class AppComponent is the class that defines the component
// title is a property that defines the title of the component

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular101';
}
