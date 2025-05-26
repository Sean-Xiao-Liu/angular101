import { Component } from '@angular/core';

// @Component is a decorator that tells Angular to create a new component
// selector is the CSS selector that identifies this component in the HTML
// templateUrl is the HTML file that describes the UI of the component
// styleUrl is the CSS file that describes the styles of the component  
// export class AppComponent is the class that defines the component
// title is a property that defines the title of the component

@Component({
  selector: 'app-header',
  // template: '<h1>App Header Component</h1>' is a template literal
  // this is the option to use if the template is simple and small
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // standalone means that the component is self-contained and does not need to be imported into another component  
  standalone: false
})
export class HeaderComponent {
  title = 'App Header Component';
}
