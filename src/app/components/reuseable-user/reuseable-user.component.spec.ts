import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableUserComponent } from './reuseable-user.component';

describe('ReuseableUserComponent', () => {
  let component: ReuseableUserComponent;
  let fixture: ComponentFixture<ReuseableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseableUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
