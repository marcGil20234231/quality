import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { TeacherService } from '../../services/teacher.service';
import { Course } from '../../models/course.model';
import { Teacher } from '../../models/teacher.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero bg-danger text-white py-5 mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-4">Quality Education for All Filipinos</h1>
            <p class="lead">Supporting the United Nations Sustainable Development Goal 4 in the Philippines</p>
            <a routerLink="/courses" class="btn btn-light btn-lg mt-3">Browse Courses</a>
          </div>
          <div class="col-md-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRh9N4ZlThn-KvJkFQVPHKI2Npn0SEwDQeNcLLqNzHilm1c5mq1w-bVA2jSRifdOOIYk4&usqp=CAU" alt="Education in the Philippines" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <section class="featured-courses mb-5">
      <div class="container">
        <h2 class="section-title text-center mb-4">Featured Courses</h2>
        <div class="row">
          <div class="col-md-4 mb-4" *ngFor="let course of featuredCourses">
            <div class="card h-100 shadow-sm">
              <img [src]="course.imageUrl" class="card-img-top" [alt]="course.title">
              <div class="card-body">
                <h5 class="card-title">{{ course.title }}</h5>
                <p class="card-text">{{ course.description | slice:0:100 }}...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge bg-danger">{{ course.level }}</span>
                  <span>{{ course.duration }} hours</span>
                </div>
              </div>
              <div class="card-footer bg-white">
                <a [routerLink]="['/courses', course.id]" class="btn btn-outline-danger w-100">View Course</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/courses" class="btn btn-danger">View All Courses</a>
        </div>
      </div>
    </section>

    <section class="sdg-info bg-light py-5 mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg" alt="SDG 4 Icon" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2>UN Sustainable Development Goal 4</h2>
            <h3 class="text-danger">Quality Education</h3>
            <p class="lead">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</p>
            <p>In the Philippines, we're committed to addressing the unique educational challenges facing our nation through accessible, high-quality learning opportunities.</p>
            <a routerLink="/about-topic" class="btn btn-outline-danger">Learn More About SDG 4</a>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-teachers mb-5">
      <div class="container">
        <h2 class="section-title text-center mb-4">Meet Our Teachers</h2>
        <div class="row">
          <div class="col-md-3 mb-4" *ngFor="let teacher of featuredTeachers">
            <div class="card h-100 shadow-sm text-center">
              <img [src]="teacher.imageUrl || '/assets/images/default-profile.jpg'" class="card-img-top rounded-circle mx-auto mt-3" style="width: 150px; height: 150px; object-fit: cover;" [alt]="teacher.fullName">
              <div class="card-body">
                <h5 class="card-title">{{ teacher.name }}</h5>
                <p class="text-muted">{{ teacher.specialization }}</p>
                <p class="card-text small">{{ teacher.bio | slice:0:80 }}...</p>
              </div>
              <div class="card-footer bg-white">
                <a [routerLink]="['/teachers', teacher.id]" class="btn btn-sm btn-outline-danger">View Profile</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/teachers" class="btn btn-danger">View All Teachers</a>
        </div>
      </div>
    </section>

    <section class="video-highlight mb-5">
      <div class="container">
        <h2 class="section-title text-center mb-4">Educational Highlights</h2>
        <div class="ratio ratio-16x9 shadow">
          <iframe src="https://www.youtube.com/embed/kX7alObjKUU" title="Educational Highlights" allowfullscreen></iframe>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/resources" class="btn btn-danger">Explore More Resources</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      position: relative;
      padding-bottom: 15px;
      margin-bottom: 30px;
    }
    
    .section-title:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      height: 3px;
      background-color: #dc3545;
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredCourses: Course[] = [];
  featuredTeachers: Teacher[] = [];

  constructor(
    private courseService: CourseService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.loadFeaturedCourses();
    this.loadFeaturedTeachers();
  }

  loadFeaturedCourses(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.featuredCourses = courses.slice(0, 3);
    });
  }

  loadFeaturedTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.featuredTeachers = teachers.slice(0, 4);
    });
  }
}