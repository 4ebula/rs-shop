import { Component, OnInit } from '@angular/core';

import { ISliderInfo } from '@feature/models/slider-info.model';
import { SLIDER_INFO } from './constants';

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

  sliderInfo: ISliderInfo[] = SLIDER_INFO;

  ngOnInit(): void {
    setInterval(() => this.delayTransition(), 5000);
  }

  transitionEnd(): void {
    const elem = this.slidesNum.splice(-1, 1);
    this.slidesNum = [...elem, ...this.slidesNum];
    this.transitionSettings['transition-duration.ms'] = 0;
    this.transitionSettings['margin-left.px'] = 0;
  }

  delayTransition(): void {
    this.transitionSettings['transition-duration.ms'] = 700;
    this.transitionSettings['margin-left.px'] = -720;
  }

  colorSwitch = (slide: number): string => {
    if (slide === 1) return '#36c';
    return 'inherit';
  };

  changeSlide = (slide: number): void => {
    const tempArray = Array.from({ length: this.amountOfSlides }, (_, i) => i + 1);
    const remainingArray = tempArray.splice(tempArray.length - slide);
    this.slidesNum = [...remainingArray, ...tempArray];
  };
}
