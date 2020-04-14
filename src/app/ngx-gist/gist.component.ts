import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-gist',
  template: `
    <iframe
      #iframe
      type="text/javascript"
      width="100%"
      frameborder="0"
      style="height:inherit"
    ></iframe>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GistComponent implements AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef;
  @Input() gistId;
  @Input() file: string;

  ngAfterViewInit() {
    const fileName = this.file ? this.file : '';
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    const doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentElement.contentWindow;

    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
