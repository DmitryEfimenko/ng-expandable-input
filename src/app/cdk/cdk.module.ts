import { NgModule } from '@angular/core';
import { ExpandableInputModule } from '@ng-expandable-input/cdk';

import { SharedModule } from '../shared.module';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';


@NgModule({
  imports: [
    SharedModule,
    CdkRoutingModule,
    ExpandableInputModule,
  ],
  declarations: [CdkComponent]
})
export class CdkModule { }
