import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoScreenComponent } from './ingreso-screen.component';

describe('IngresoScreenComponent', () => {
  let component: IngresoScreenComponent;
  let fixture: ComponentFixture<IngresoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
