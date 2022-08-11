import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosScreenComponent } from './productos-screen.component';

describe('ProductosScreenComponent', () => {
  let component: ProductosScreenComponent;
  let fixture: ComponentFixture<ProductosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
