import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render breadcrumbs', () => {
    component.paths = [{ path: 'path', name: 'путь' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      Array.from(compiled.querySelectorAll('li'))[1].querySelector('a')?.textContent
    ).toContain('путь');
    expect(component).toBeTruthy();
  });
});
