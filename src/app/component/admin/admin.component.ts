import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 stats = [
    { title: 'Total Users', value: '1,250', color: 'primary' },
    { title: 'Active Subscriptions', value: '982', color: 'success' },
    { title: 'Revenue', value: '$45,670', color: 'warning' },
  ];

  activities = [
    { time: '10:30 AM', description: 'User John Doe signed up.' },
    { time: '10:00 AM', description: 'New subscription by Jane Smith.' },
    { time: '9:45 AM', description: 'Payment received: $120.' },
  ];
}
