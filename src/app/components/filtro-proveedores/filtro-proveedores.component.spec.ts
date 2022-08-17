import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProveedoresComponent } from './filtro-proveedores.component';

describe('FiltroProveedoresComponent', () => {
  let component: FiltroProveedoresComponent;
  let fixture: ComponentFixture<FiltroProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
