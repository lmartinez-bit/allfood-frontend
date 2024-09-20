import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";

declare global {
  interface Window {
    WOW: any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'allfood-frontend';

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // El código solo se ejecutará en el navegador
      setTimeout(() => {
        if (typeof window['WOW'] !== 'undefined') {
          console.log('WOW is loaded');
          new window['WOW']().init(); // Inicializa WOW.js cuando se carga la aplicación
        } else {
          console.warn('WOW.js is not loaded.');
        }
      }, 1000);
    } else {
      // Esto se mostrará cuando se ejecute en el servidor
      console.warn('Running on server - WOW.js is not available.');
    }
  }
}
