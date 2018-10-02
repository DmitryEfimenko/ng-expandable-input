import { NgModule } from '@angular/core';
import { CdkRoutingModule } from './cdk-routing.module';
import { SharedModule } from '../shared.module';
import { ExpandableInputModule } from 'ng-expandable-input';
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
