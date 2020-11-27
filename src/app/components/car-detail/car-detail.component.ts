import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CarDetailComponent implements OnInit {
  @Input() car: Car;

  imageToShow: any;
  isImageLoading: boolean;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private carService: CarService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
