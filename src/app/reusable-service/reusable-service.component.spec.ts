import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableServiceComponent } from './reusable-service.component';

describe('ReusableServiceComponent', () => {
  let component: ReusableServiceComponent;
  let fixture: ComponentFixture<ReusableServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
