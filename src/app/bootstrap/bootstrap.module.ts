import { NgModule } from '@angular/core';
import { ExpandableInputBootstrapModule } from 'ng-expandable-input-bootstrap';

import { SharedModule } from '../shared.module';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  imports: [
    SharedModule,
    BootstrapRoutingModule,
    ExpandableInputBootstrapModule
  ],
  declarations: [BootstrapComponent]
})
export class BootstrapModule { }
