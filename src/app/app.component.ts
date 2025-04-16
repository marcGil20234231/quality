import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent],
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <main class="container mt-4 mb-4">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quality Education Philippines';
}