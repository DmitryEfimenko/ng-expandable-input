import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkExpandableInputComponent } from './expandable-input.component';
import { ExpandableInputModule } from './expandable-input.module';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  selector: 'cdk-test',
  template: `
  <cdk-expandable-input>
    <input type="text" cdkExpInput />
    <i cdkExpIconOpen>🔍</i>
    <i cdkExpIconClose>✖️</i>
  </cdk-expandable-input>
  `
})
export class TestComponent {
}

describe('ExpandableInputComponent', () => {
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let expInpDebugElement: DebugElement;
  let expInpNativeElement: HTMLElement;
  let expInpInstance: CdkExpandableInputComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExpandableInputModule],
      declarations: [TestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();

    expInpDebugElement = fixture.debugElement.query(By.directive(CdkExpandableInputComponent));
    expInpNativeElement = expInpDebugElement.nativeElement;
    expInpInstance = expInpDebugElement.injector.get(CdkExpandableInputComponent);
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });

  it('should detect dimentions', () => {
    expect(expInpInstance.dims.icons).toEqual({ w: 22, h: 17 });
    expect(expInpInstance.dims.iconOpen).toEqual({ w: 22, h: 17 });
    expect(expInpInstance.dims.iconClose).toEqual({ w: 22, h: 17 });
    expect(expInpInstance.dims.cdkExpInput).toEqual({ w: 0, h: 21 });
  });
});
