import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizacionPlatoComponent } from './personalizacion-plato.component';

describe('PersonalizacionPlatoComponent', () => {
  let component: PersonalizacionPlatoComponent;
  let fixture: ComponentFixture<PersonalizacionPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizacionPlatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizacionPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
