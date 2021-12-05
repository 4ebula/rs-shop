import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addCategory, loadCategories } from 'src/app/store/actions/categories.actions';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCategoriesOpened: boolean = false;

  sub: Subscription = new Subscription();

  constructor(private router: Router, private store: Store<AppState>) {
    this.store.dispatch(
      addCategory({ id: '1', name: 'Fridge', subCategories: [{ id: 'sub1', name: 'testSub12' }] })
    );
    this.store.dispatch(loadCategories());
    const test = this.store.select((state) => state.categories);
    const sub = test.subscribe((res) => console.log(res));
    this.sub.add(sub);
  }

  showCategories(): void {
    this.isCategoriesOpened = !this.isCategoriesOpened;
  }

  closePopup(): void {
    this.isCategoriesOpened = false;
  }

  ngOnInit(): void {
    const sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closePopup();
      }
    });
    this.sub.add(sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
