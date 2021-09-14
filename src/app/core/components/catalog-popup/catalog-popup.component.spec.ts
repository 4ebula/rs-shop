import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPopupComponent } from './catalog-popup.component';

describe('CatalogPopupComponent', () => {
  let component: CatalogPopupComponent;
  let fixture: ComponentFixture<CatalogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
