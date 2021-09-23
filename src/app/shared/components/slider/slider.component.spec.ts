import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISliderProduct } from '@shared/models/slider.model';
import { SLIDER_INFO } from './constants';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    component.sliderInfo = SLIDER_INFO as Array<ISliderProduct>[];
    component.name = 'default';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
