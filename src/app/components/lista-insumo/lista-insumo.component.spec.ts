import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInsumoComponent } from './lista-insumo.component';

describe('ListaInsumoComponent', () => {
  let component: ListaInsumoComponent;
  let fixture: ComponentFixture<ListaInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
