import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCategoriesOpened: boolean = false;

  sub!: Subscription;

  constructor(private router: Router) {}

  showCategories(): void {
    this.isCategoriesOpened = !this.isCategoriesOpened;
  }

  closePopup(): void {
    this.isCategoriesOpened = false;
  }

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closePopup();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
