import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioScreenComponent } from './inicio-screen.component';

describe('InicioScreenComponent', () => {
  let component: InicioScreenComponent;
  let fixture: ComponentFixture<InicioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
