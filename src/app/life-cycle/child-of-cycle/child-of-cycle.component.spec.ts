import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfCycleComponent } from './child-of-cycle.component';

describe('ChildOfCycleComponent', () => {
  let component: ChildOfCycleComponent;
  let fixture: ComponentFixture<ChildOfCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOfCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
