import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CdkExpandableInputComponent, ExpInputError } from '@ng-expandable-input/cdk';

import { ExpIconCloseBootstrapDirective } from './exp-icon-close-bootstrap.directive';
import { ExpIconOpenBootstrapDirective } from './exp-icon-open-bootstrap.directive';
import { ExpInputBootstrapDirective } from './exp-input-bootstrap.directive';


@Component({
  selector: 'bts-expandable-input',
  templateUrl: 'expandable-input-bootstrap.component.html',
  styleUrls: ['expandable-input-bootstrap.component.scss']
})
export class ExpandableInputBootstrapComponent implements OnInit {
  @Input() group: string | undefined;
  @Input() isAbsolute = false;
  @Input() right = 0;
  @Input() slideToEdge = false;
  @Input() openOnKey: string | undefined;

  isOpen = false;

  @ViewChild(CdkExpandableInputComponent, { static: false }) cdk: CdkExpandableInputComponent;

  @ContentChild(ExpInputBootstrapDirective, { read: ElementRef, static: true }) expandableInputRef: ElementRef;
  @ContentChild(ExpIconCloseBootstrapDirective, { read: ElementRef, static: true }) iconClose: ElementRef;
  @ContentChild(ExpIconOpenBootstrapDirective, { read: ElementRef, static: true }) iconOpen: ElementRef;

  ngOnInit() {
    this.sanityCheck();
  }

  opened() {
    this.isOpen = true;
  }

  closed() {
    this.isOpen = false;
  }

  private sanityCheck() {
    if (!this.expandableInputRef) {
      throw new ExpInputError('You need to include an element with attribute btsExpInput');
    }

    if (!this.iconOpen) {
      throw new ExpInputError('You need to include an element with attribute btsExpIconOpen');
    }
  }
}
