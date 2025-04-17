import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-dark text-white py-4 mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Quality Education PH</h5>
            <p>Supporting UN Sustainable Development Goal 4:<br>Quality Education in the Philippine context</p>
          </div>
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-white">Home</a></li>
              <li><a routerLink="/courses" class="text-white">Courses</a></li>
              <li><a routerLink="/resources" class="text-white">Resources</a></li>
              <li><a routerLink="/about-topic" class="text-white">About SDG 4</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Connect With Us</h5>
            <div class="d-flex gap-2">
              <a href="#" class="text-white"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 text-center">
            <small>&copy; 2025 Quality Education PH. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}