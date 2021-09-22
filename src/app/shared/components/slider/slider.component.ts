import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { DEFAULT_SETTINGS, ISliderProduct, ISliderSettings } from '@shared/models/slider.model';
import { SLIDER_INFO } from './constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() settings!: ISliderSettings;

  @Input() name!: string;

  @Input() sliderInfo!: Array<ISliderProduct>[];

  config: ISliderSettings;

  slidesNum!: number[];

  scrollWidth!: number;

  transitionSettings = {
    'margin-left.px': 0,
    'transition-duration.ms': 0,
  };

  transitionSettingsProd = {
    'left.px': 0,
  };

  currentNum: number = 0;

  constructor(private elemRef: ElementRef) {
    this.config = { ...DEFAULT_SETTINGS };
  }

  ngOnInit(): void {
    Object.assign(this.config, { ...this.settings });
    if (this.name === 'default') this.sliderInfo = SLIDER_INFO as Array<ISliderProduct>[];
    this.applySettings();
  }

  applySettings(): void {
    if (this.config.automated) {
      setInterval(() => this.delayTransition(), 5000);
    }
    this.slidesNum = Array.from({ length: this.config.slidesAmount }, (_, i) => i + 1);
    this.scrollWidth = this.elemRef.nativeElement.offsetWidth > 370 ? 720 : 360;
  }

  transitionEnd(): void {
    const elem = this.slidesNum.splice(-1, 1);
    this.slidesNum = [...elem, ...this.slidesNum];
    this.transitionSettings['transition-duration.ms'] = 0;
    this.transitionSettings['margin-left.px'] = 0;
  }

  delayTransition(): void {
    this.transitionSettings['transition-duration.ms'] = 700;
    this.transitionSettings['margin-left.px'] = -this.scrollWidth;
  }

  colorSwitch = (slide: number): string => {
    if (slide === 1) return '#36c';
    return 'inherit';
  };

  changeSlide = (slide: number): void => {
    const tempArray = Array.from({ length: this.config.slidesAmount }, (_, i) => i + 1);
    const remainingArray = tempArray.splice(tempArray.length - slide);
    this.slidesNum = [...remainingArray, ...tempArray];
  };

  hanleSlide(dir: boolean): void {
    if (!dir && this.currentNum === 0) return;
    if (dir && this.currentNum === this.sliderInfo.length - 1) return;
    this.currentNum += dir ? 1 : -1;
    this.transitionSettingsProd['left.px'] = -this.scrollWidth * this.currentNum;
  }

  generateLink = (prod: ISliderProduct): string => {
    return `/${prod.category}/${prod.id}`;
  };
}
