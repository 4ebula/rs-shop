import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
// import { IOrder, Payment } from '@feature/models/order.model';
import { Payment } from '@feature/models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() total!: number;

  email: string = '';

  isCourier: boolean = true;

  isDateSelected: boolean = false;

  name: string = '';

  delivery = {
    date: '',
    time: '',
  };

  paymentMethod: Payment = Payment.cash;

  deliveryDates: string[];

  deliveryTime: string[];

  constructor(private elem: ElementRef) {
    this.deliveryDates = this.getDays();
    this.deliveryTime = this.generateTime();
  }

  ngOnInit(): void {
    this.elem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  show = (ev: any) => {
    console.log(ev);
  };

  changeDeliveryOption(status: boolean) {
    this.total += 6 * (status ? 1 : -1);
    if (!status) {
      this.delivery.time = '';
      this.delivery.date = '';
    }
    this.isCourier = status;
  }

  changePaymentMethod(option: boolean): void {
    this.paymentMethod = option ? Payment.cash : Payment.card;
  }

  setDeliveryDate(event: Event) {
    const target = event.target as HTMLSelectElement;
    const index = target.options.selectedIndex;
    this.delivery.date = index > 0 ? this.deliveryDates[index - 1] : '';
    this.isDateSelected = index > 0;
  }

  setDeliveryTime = (event: Event): void => {
    const target = event.target as HTMLSelectElement;
    const index = target.options.selectedIndex;
    this.delivery.time = index > 0 ? this.deliveryTime[index - 1] : '';
  };

  getDays = (): string[] => {
    const daysArr = [];
    const current = new Date();
    current.setDate(current.getDate() + 1);
    for (let i = 0; i < 5; i++) {
      if (new Date(current).toLocaleDateString('ru-RU', { weekday: 'long' }) !== 'воскресенье') {
        daysArr.push(
          new Date(current).toLocaleDateString('ru-RU', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })
        );
      } else i -= 1;
      current.setDate(current.getDate() + 1);
    }
    return daysArr;
  };

  generateTime = (): string[] => {
    const arr = [];
    for (let i = 11; i < 20; i++) {
      arr.push(`${i}:00-${i + 3}:00`);
    }
    return arr;
  };

  // eslint-disable-next-line class-methods-use-this
  submitOrder(ele: NgModel): void {
    console.log(ele.valid);
  }
}
