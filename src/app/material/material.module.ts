import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ExpandableInputMaterialModule } from '@ng-expandable-input/material';

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
