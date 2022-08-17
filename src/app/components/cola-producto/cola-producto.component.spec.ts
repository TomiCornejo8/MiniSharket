import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaProductoComponent } from './cola-producto.component';

describe('ColaProductoComponent', () => {
  let component: ColaProductoComponent;
  let fixture: ComponentFixture<ColaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
