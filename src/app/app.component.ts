import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

// Recordar poner todos los componentes en app.component.html! porque no va a compilar.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavComponent, DashboardComponent, FooterComponent],
  templateUrl: './app.component.html', //VER ESTO
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
