import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosScreenComponent } from './gastos-screen.component';

describe('GastosScreenComponent', () => {
  let component: GastosScreenComponent;
  let fixture: ComponentFixture<GastosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
