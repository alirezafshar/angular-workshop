import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrckByComponent } from './trackBy.component';

describe('TrckByComponent', () => {
  let component: TrckByComponent;
  let fixture: ComponentFixture<TrckByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrckByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrckByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
