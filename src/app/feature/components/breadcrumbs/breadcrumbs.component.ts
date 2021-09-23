import { Component, Input } from '@angular/core';

import { IBreadcrumbs } from '@feature/models/breadcrumbs.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() paths: IBreadcrumbs[] = [];
}
