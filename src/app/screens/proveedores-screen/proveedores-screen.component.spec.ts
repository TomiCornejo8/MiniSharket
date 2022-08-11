import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresScreenComponent } from './proveedores-screen.component';

describe('ProveedoresScreenComponent', () => {
  let component: ProveedoresScreenComponent;
  let fixture: ComponentFixture<ProveedoresScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
