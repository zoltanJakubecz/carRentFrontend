import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/Car';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  @Input() car: Car;

  imageToShow: any;
  isImageLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
