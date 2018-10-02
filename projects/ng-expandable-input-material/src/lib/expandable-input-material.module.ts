import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { ExpandableInputModule } from '@ng-expandable-input/cdk';

import { ExpIconCloseMaterialDirective } from './exp-icon-close-material.directive';
import { ExpIconOpenMaterialDirective } from './exp-icon-open-material.directive';
import { ExpandableInputMaterialComponent } from './expandable-input-material.component';

@NgModule({
  imports: [
    CommonModule,
    ExpandableInputModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    ExpandableInputMaterialComponent,
    ExpIconOpenMaterialDirective,
    ExpIconCloseMaterialDirective
  ],
  exports: [
    ExpandableInputModule,
    ExpandableInputMaterialComponent,
    ExpIconOpenMaterialDirective,
    ExpIconCloseMaterialDirective
  ]
})
export class ExpandableInputMaterialModule { }
