import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs';

import { CartButtonComponent } from './cart-button.component';

describe('CartButtonComponent', () => {
  let component: CartButtonComponent;
  let fixture: ComponentFixture<CartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartButtonComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonComponent);
    component = fixture.componentInstance;
    component.settings = { id: 'Test', amount: 2, isInCart: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
