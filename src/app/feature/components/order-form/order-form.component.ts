import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() total!: number;

  constructor(private elem: ElementRef) {
    console.log(this);
  }

  ngOnInit(): void {
    this.elem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(this);
  }
}
