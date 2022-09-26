import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasScreenComponent } from './finanzas-screen.component';

describe('FinanzasScreenComponent', () => {
  let component: FinanzasScreenComponent;
  let fixture: ComponentFixture<FinanzasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzasScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanzasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
