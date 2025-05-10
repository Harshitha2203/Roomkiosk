import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
 rooms = [
    {
      name: 'Deluxe Suite',
      description: 'Spacious and luxurious suite with stunning views.',
      image: 'assets/4.jpeg',
    },
    {
      name: 'Executive Room',
      description: 'Ideal for business travelers, equipped with modern amenities.',
      image: 'assets/3.jpeg',
    },
    {
      name: 'Family Room',
      description: 'Comfortable and cozy space for the entire family.',
      image: 'assets/1.jpeg',
    },
  ];
}
