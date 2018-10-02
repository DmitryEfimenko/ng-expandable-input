import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableInputModule } from 'ng-expandable-input';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

import { ExpandableInputMaterialComponent } from './expandable-input-material.component';
import { ExpIconCloseMaterialDirective } from './exp-icon-close-material.directive';
import { ExpIconOpenMaterialDirective } from './exp-icon-open-material.directive';

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
