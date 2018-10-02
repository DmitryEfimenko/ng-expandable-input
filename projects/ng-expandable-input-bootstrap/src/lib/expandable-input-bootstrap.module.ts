import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpandableInputModule } from '@ng-expandable-input/cdk';

import { ExpIconCloseBootstrapDirective } from './exp-icon-close-bootstrap.directive';
import { ExpIconOpenBootstrapDirective } from './exp-icon-open-bootstrap.directive';
import { ExpInputBootstrapDirective } from './exp-input-bootstrap.directive';
import { ExpandableInputBootstrapComponent } from './expandable-input-bootstrap.component';

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
