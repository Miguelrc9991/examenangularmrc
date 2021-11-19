import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevanacionalidadComponent } from './nuevanacionalidad.component';

describe('NuevanacionalidadComponent', () => {
  let component: NuevanacionalidadComponent;
  let fixture: ComponentFixture<NuevanacionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevanacionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevanacionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
