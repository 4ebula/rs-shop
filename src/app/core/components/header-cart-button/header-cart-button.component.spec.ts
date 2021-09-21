import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InlineSVGModule } from 'ng-inline-svg';

import { HeaderCartButtonComponent } from './header-cart-button.component';

describe('CartButtonComponent', () => {
  let component: HeaderCartButtonComponent;
  let fixture: ComponentFixture<HeaderCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderCartButtonComponent],
      imports: [InlineSVGModule, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
