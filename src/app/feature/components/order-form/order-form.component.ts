import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

import { GeoService } from '@core/services/geo/geo.service';
import { IOrder, IAddress, Payment, ILocation } from '@feature/models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit, OnDestroy {
  @Input() total!: number;

  @Output() closeForm = new EventEmitter<boolean>();

  @Output() deliveryOptions = new EventEmitter<IOrder>();

  email: string = '';

  isCourier: boolean = true;

  isDateSelected: boolean = false;

  name: string = '';

  delivery = {
    date: '',
    time: '',
  };

  address: IAddress = {
    street: '',
    apartment: '',
    entrance: null,
    floor: null,
  };

  paymentMethod: Payment = Payment.cash;

  deliveryDates: string[];

  deliveryTime: string[];

  mobNumberPattern = '^(\\+375)[0-9]{9}$';

  mobileNumber!: string;

  city!: string;

  sub: Subscription = new Subscription();

  isDeliveryDateTimeSelected = {
    date: true,
    time: true,
  };

  comments: string = '';

  constructor(private elem: ElementRef, private geoServ: GeoService) {
    this.deliveryDates = this.getDays();
    this.deliveryTime = this.generateTime();
  }

  ngOnInit(): void {
    this.scrollUp();
    const sub = this.geoServ.geo$.subscribe((res) => {
      this.city = res;
    });
    this.sub.add(sub);
  }

  scrollUp(): void {
    this.elem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
    this.isDeliveryDateTimeSelected.date = index > 0;
  }

  setDeliveryTime = (event: Event): void => {
    const target = event.target as HTMLSelectElement;
    const index = target.options.selectedIndex;
    this.delivery.time = index > 0 ? this.deliveryTime[index - 1] : '';
    this.isDeliveryDateTimeSelected.time = index > 0;
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

  submitOrder(name: NgModel, phone: NgModel): void {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const { address, floor, city } = name.control['_parent'].controls;
    let isFormValid: boolean = false;
    if (this.isCourier) {
      if (this.delivery.date === '') this.isDeliveryDateTimeSelected.date = false;
      if (this.delivery.time === '') this.isDeliveryDateTimeSelected.time = false;

      isFormValid =
        this.isDeliveryDateTimeSelected.time &&
        this.isDeliveryDateTimeSelected.date &&
        !!phone.valid &&
        !!name.valid &&
        !!address.valid &&
        !!city.valid &&
        !!floor.valid;
    } else {
      isFormValid = !!name.valid && !!phone.valid;
    }

    if (isFormValid) {
      this.createOrder();
      this.closeForm.emit(true);
    } else {
      this.scrollUp();
      if (name.invalid) {
        name.control.markAsTouched();
      }
      if (phone.invalid) {
        phone.control.markAsTouched();
      }
      if (address.invalid) {
        address.markAsTouched();
      }
      if (floor.invalid) {
        floor.markAsTouched();
      }
    }
  }

  createOrder(): void {
    const order: IOrder = {
      name: this.name,
      courier: this.isCourier,
      phone: this.mobileNumber,
      payment: this.paymentMethod,
    };

    if (this.email !== '') order.email = this.email;
    if (this.isCourier) {
      order.location = { ...this.address, city: this.city } as ILocation;
      order.delivery = {
        date: this.delivery.date,
        time: this.delivery.time,
      };
    }

    if (this.comments !== '') {
      order.comments = this.comments;
    }
    this.deliveryOptions.emit(order);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
