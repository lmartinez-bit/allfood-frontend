import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcionCardComponent } from './porcion-card.component';

describe('PorcionCardComponent', () => {
  let component: PorcionCardComponent;
  let fixture: ComponentFixture<PorcionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorcionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
