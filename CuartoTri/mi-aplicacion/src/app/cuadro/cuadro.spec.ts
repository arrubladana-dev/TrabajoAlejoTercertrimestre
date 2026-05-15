import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadro } from './cuadro';

describe('Cuadro', () => {
  let component: Cuadro;
  let fixture: ComponentFixture<Cuadro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cuadro],
    }).compileComponents();

    fixture = TestBed.createComponent(Cuadro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
