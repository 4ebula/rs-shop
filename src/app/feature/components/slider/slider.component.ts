import { Component, OnInit } from '@angular/core';
import { LINKS } from './constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  amountOfSlides: number = 10;

  slidesNum: number[] = Array.from({ length: this.amountOfSlides }, (_, i) => i + 1);

  transitionSettings = {
    'margin-left.px': 0,
    'transition-duration.ms': 0,
  };

  links = LINKS;

  ngOnInit(): void {
    setInterval(() => {
      this.transitionSettings['transition-duration.ms'] = 700;
      this.transitionSettings['margin-left.px'] = -720;
    }, 5000);
  }

  transitionEnd(): void {
    this.slidesNum = this.slidesNum.map((e, _, arr) => {
      let temp = e + 1;
      if (temp > arr.length) temp = 1;
      return temp;
    });
    this.transitionSettings['transition-duration.ms'] = 0;
    this.transitionSettings['margin-left.px'] = 0;
  }
}
