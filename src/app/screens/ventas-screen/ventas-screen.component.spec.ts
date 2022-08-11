import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasScreenComponent } from './ventas-screen.component';

describe('VentasScreenComponent', () => {
  let component: VentasScreenComponent;
  let fixture: ComponentFixture<VentasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
