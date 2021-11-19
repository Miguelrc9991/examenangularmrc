import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpeliculaComponent } from './modificarpelicula.component';

describe('ModificarpeliculaComponent', () => {
  let component: ModificarpeliculaComponent;
  let fixture: ComponentFixture<ModificarpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarpeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
