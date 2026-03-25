import { Component } from '@angular/core';
import { dummyTrafficData } from '../../shared/data/dummy-traffic';

@Component({
  selector: 'app-traffic',
  standalone: true,
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  dummyTrafficData = dummyTrafficData;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
