import { Component, OnInit, Input, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { CdkExpandableInputComponent, ExpInputError } from '@ng-expandable-input/cdk';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { ExpIconCloseMaterialDirective } from './exp-icon-close-material.directive';
import { ExpIconOpenMaterialDirective } from './exp-icon-open-material.directive';

@Component({
  selector: 'mat-expandable-input',
  templateUrl: 'expandable-input-material.component.html',
  styleUrls: ['expandable-input-material.component.scss']
})
export class ExpandableInputMaterialComponent implements OnInit {
  @Input() group: string | undefined;
  @Input() isAbsolute = false;
  @Input() right = 0;
  @Input() slideToEdge = false;
  @Input() openOnKey: string | undefined;

  isOpen = false;

  @ViewChild(CdkExpandableInputComponent, { static: false }) cdk: CdkExpandableInputComponent;

  @ContentChild(MatFormFieldControl, { static: true }) _control: MatFormFieldControl<any>;
  @ViewChild(MatFormField, { static: true }) _matFormField: MatFormField;

  @ContentChild(ExpIconCloseMaterialDirective, { read: ElementRef, static: true }) iconClose: ElementRef;
  @ContentChild(ExpIconOpenMaterialDirective, { read: ElementRef, static: true }) iconOpen: ElementRef;

  ngOnInit() {
    this.sanityCheck();
    this._matFormField._control = this._control;
  }

  opened() {
    this.isOpen = true;
  }

  closed() {
    this.isOpen = false;
  }

  private sanityCheck() {
    if (!this._control) {
      throw new ExpInputError('You need to include an element with attribute matExpInput');
    }

    if (!this.iconOpen) {
      throw new ExpInputError('You need to include an element with attribute matExpIconOpen');
    }
  }
}
