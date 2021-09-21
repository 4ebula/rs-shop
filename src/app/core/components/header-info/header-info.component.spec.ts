import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoService } from '@core/services/geo/geo.service';
import { PopupService } from '@core/services/popup/popup.service';
import { InlineSVGModule } from 'ng-inline-svg';
import { Observable } from 'rxjs';

import { HeaderInfoComponent } from './header-info.component';

describe('HeaderInfoComponent', () => {
  let component: HeaderInfoComponent;
  let fixture: ComponentFixture<HeaderInfoComponent>;
  const popServTest: Partial<PopupService> = {
    showPopup() {
      return undefined;
    },
  };
  const geoServTest: Partial<GeoService> = {
    geo$: new Observable((subscriber) => {
      subscriber.next('Minsk');
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderInfoComponent],
      providers: [
        { provide: PopupService, useValue: popServTest },
        { provide: GeoService, useValue: geoServTest },
      ],
      imports: [InlineSVGModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
