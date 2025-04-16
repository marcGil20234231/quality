import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-topic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <h1 class="text-center mb-5">UN Sustainable Development Goal 4: Quality Education</h1>
      
      <div class="row mb-5">
        <div class="col-md-4">
          <img src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-04-1024x1024.png" alt="SDG 4 Logo" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-8">
          <h2 class="text-danger">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</h2>
          <p class="lead">
            Education enables upward socioeconomic mobility and is a key to escaping poverty. Education is also essential to achieving many other Sustainable Development Goals (SDGs).
          </p>
          <p>
            When people can access quality education, they can break from the cycle of poverty. Education helps to reduce inequalities and to reach gender equality.
          </p>
        </div>
      </div>
      
      <div class="mb-5">
        <h3>SDG 4 in the Philippine Context</h3>
        <p>
          The Philippines faces unique challenges in achieving quality education for all. Despite significant progress in enrollment rates, issues of quality, accessibility, and equity remain:
        </p>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card h-100 shadow-sm mb-4">
              <div class="card-body">
                <h4 class="card-title">Current Challenges</h4>
                <ul>
                  <li>Limited access to education in remote and poor communities</li>
                  <li>High dropout rates, especially in secondary education</li>
                  <li>Inadequate educational infrastructure and learning materials</li>
                  <li>Teacher shortages in specialized subjects</li>
                  <li>Digital divide impacting learning opportunities</li>
                  <li>Learning gaps exacerbated by the COVID-19 pandemic</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 shadow-sm mb-4">
              <div class="card-body">
                <h4 class="card-title">Opportunities for Progress</h4>
                <ul>
                  <li>Integration of technology in education</li>
                  <li>Alternative learning systems for out-of-school youth</li>
                  <li>Teacher professional development programs</li>
                  <li>Public-private partnerships in education</li>
                  <li>Community-based educational initiatives</li>
                  <li>Focus on 21st-century skills and competencies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mb-5">
        <h3>Key Targets of SDG 4</h3>
        <div class="row mt-4">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="target-icon bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
                  <i class="bi bi-book fs-4"></i>
                </div>
                <h5 class="card-title text-center">Primary and Secondary Education</h5>
                <p class="card-text">Ensure that all children have access to free, equitable, and quality primary and secondary education.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="target-icon bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
                  <i class="bi bi-mortarboard fs-4"></i>
                </div>
                <h5 class="card-title text-center">Higher Education</h5>
                <p class="card-text">Ensure equal access to affordable and quality technical, vocational and tertiary education, including university.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="target-icon bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
                  <i class="bi bi-laptop fs-4"></i>
                </div>
                <h5 class="card-title text-center">Technology Skills</h5>
                <p class="card-text">Increase the number of youth and adults with relevant skills, including technical and vocational skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mb-5">
        <h3>Video: Understanding SDG 4</h3>
        <div class="ratio ratio-16x9 shadow">
          <iframe src="https://www.youtube.com/embed/4HXyJmY--gM" title="UNESCO Education 2030" allowfullscreen></iframe>
        </div>
      </div>
      
      <div class="mb-5">
        <h3>Our Commitment</h3>
        <p>
          This platform is dedicated to supporting the achievement of SDG 4 in the Philippines by:
        </p>
        <ul>
          <li>Providing accessible, quality educational resources to Filipino learners</li>
          <li>Supporting teachers with professional development opportunities</li>
          <li>Leveraging technology to bridge educational gaps</li>
          <li>Promoting inclusive education that reaches marginalized communities</li>
          <li>Advocating for policy changes that strengthen the educational system</li>
        </ul>
      </div>
      
      <div class="text-center">
        <p class="lead">
          Join us in our mission to ensure quality education for all Filipinos.
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class AboutTopicComponent {}
