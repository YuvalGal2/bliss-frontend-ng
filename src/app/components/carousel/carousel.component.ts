import {Component, Input} from '@angular/core';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
    imports: [
        AsyncPipe
    ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input('image') image?: string;
  constructor() {
  }
}
