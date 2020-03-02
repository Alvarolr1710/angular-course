import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameControlComponent } from './username-control.component';

describe('UsernameControlComponent', () => {
  let component: UsernameControlComponent;
  let fixture: ComponentFixture<UsernameControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
