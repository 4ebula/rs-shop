import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { GeoService } from '@core/services/geo/geo.service';

import { OrderFormComponent } from './order-form.component';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;
  const geoServTest = {
    geo$: new Observable((subscriber) => {
      subscriber.next('Minks');
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderFormComponent],
      imports: [FormsModule],
      providers: [{ provide: GeoService, useValue: geoServTest }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
