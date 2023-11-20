import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealocateProcessComponent } from './realocate-process.component';

describe('RealocateProcessComponent', () => {
  let component: RealocateProcessComponent;
  let fixture: ComponentFixture<RealocateProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealocateProcessComponent]
    });
    fixture = TestBed.createComponent(RealocateProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
