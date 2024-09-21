import { Component } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-personalizacion-plato',
  standalone: true,
  imports: [],
  templateUrl: './personalizacion-plato.component.html',
  styleUrl: './personalizacion-plato.component.css'
})
export class PersonalizacionPlatoComponent {

  name = 'Angular';
  private stepper!: Stepper;

  constructor() {
    
  }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      import('bs-stepper').then((module) => {
        const Stepper = module.default;
        // Inicializa bs-stepper aquí
        this.stepper = new Stepper(document.querySelector('#stepper1')!, {
          linear: false,
          animation: true
        })
      });
    }
  }

}
