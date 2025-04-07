import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// describe is a function that describes the component
// beforeEach is a function that runs before each test
// configureTestingModule is a function that configures the testing module
// imports is an array of modules that are imported into the component
// compileComponents is a function that compiles the component
// createComponent is a function that creates a component 
// fixture is a function that creates a fixture for the component
// nativeElement is a function that returns the native element of the component
// querySelector is a function that returns the first element that matches the selector
// querySelectorAll is a function that returns all elements that match the selector
// textContent is a function that returns the text content of the element

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular101' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular101');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular101');
  });
});
