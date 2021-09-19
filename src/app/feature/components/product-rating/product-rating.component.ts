import { Component, ElementRef, Input, OnInit } from '@angular/core';

enum Rating {
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
}

@Component({
  selector: 'app-product-rating',
  template: '',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  @Input() rating: number = 0;

  constructor(private elemRef: ElementRef) {}

  ngOnInit(): void {
    this.elemRef.nativeElement.className = Rating[this.rating];
  }
}
