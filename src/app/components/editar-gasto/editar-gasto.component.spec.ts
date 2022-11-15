import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGastoComponent } from './editar-gasto.component';

describe('EditarGastoComponent', () => {
  let component: EditarGastoComponent;
  let fixture: ComponentFixture<EditarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
