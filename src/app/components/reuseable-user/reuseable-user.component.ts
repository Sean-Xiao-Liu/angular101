import { Component, Input, input, computed } from '@angular/core';

@Component({
  selector: 'app-reuseable-user',
  imports: [],
  templateUrl: './reuseable-user.component.html',
  styleUrl: './reuseable-user.component.css'
})
export class ReuseableUserComponent {
  // the input decorator is used to bind the input properties to the component
  // need to use the ! operator to tell the compiler that the property is not null or undefined
  // these input are coming from the app.component.html file
  // required: true means that the property is required and must be provided when the component is used
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  // computed property
  // imagePath = computed(() => {
  //   return 'assets/images/users/' + this.avatar();
  // });

  onSelectUser() {
    // the () is used to call the function when property are read as single value
    // However if use @Input decorator, the property is read as single value, and the () is not needed
    console.log('Selected user:', this.name, 'with id:', this.id);
  }

  // This is the way to define a property when using @Input decorator
  get imagePath() {
    return 'assets/images/users/' + this.avatar;
  }
}
