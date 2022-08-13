import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoVentaComponent } from './carrito-venta.component';

describe('CarritoVentaComponent', () => {
  let component: CarritoVentaComponent;
  let fixture: ComponentFixture<CarritoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
