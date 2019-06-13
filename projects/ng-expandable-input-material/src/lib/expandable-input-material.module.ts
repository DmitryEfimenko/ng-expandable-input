import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableInputModule } from '@ng-expandable-input/cdk';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
