import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableInputModule } from 'ng-expandable-input';

import { ExpandableInputBootstrapComponent } from './expandable-input-bootstrap.component';
import { ExpIconCloseBootstrapDirective } from './exp-icon-close-bootstrap.directive';
import { ExpIconOpenBootstrapDirective } from './exp-icon-open-bootstrap.directive';
import { ExpInputBootstrapDirective } from './exp-input-bootstrap.directive';

@NgModule({
  imports: [
    CommonModule,
    ExpandableInputModule
  ],
  declarations: [
    ExpandableInputBootstrapComponent,
    ExpInputBootstrapDirective,
    ExpIconOpenBootstrapDirective,
    ExpIconCloseBootstrapDirective
  ],
  exports: [
    ExpandableInputModule,
    ExpandableInputBootstrapComponent,
    ExpInputBootstrapDirective,
    ExpIconOpenBootstrapDirective,
    ExpIconCloseBootstrapDirective
  ]
})
export class ExpandableInputBootstrapModule { }
