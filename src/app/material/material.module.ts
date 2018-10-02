import { NgModule } from '@angular/core';
import { ExpandableInputMaterialModule } from 'ng-expandable-input-material';
import { MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

import { SharedModule } from '../shared.module';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialRoutingModule,
    ExpandableInputMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [MaterialComponent]
})
export class MaterialModule { }
