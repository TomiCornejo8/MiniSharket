import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarCredencialComponent } from './revisar-credencial.component';

describe('RevisarCredencialComponent', () => {
  let component: RevisarCredencialComponent;
  let fixture: ComponentFixture<RevisarCredencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarCredencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarCredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
