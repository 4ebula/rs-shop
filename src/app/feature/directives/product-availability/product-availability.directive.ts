import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appProductAvailability]',
})
export class ProductAvailabilityDirective implements OnInit {
  @Input() amount!: number;

  @Output() appProductAvailability: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    if (this.amount > 0) this.appProductAvailability.emit(true);
    else this.appProductAvailability.emit(false);
  }
}
