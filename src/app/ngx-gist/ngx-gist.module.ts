import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GistComponent } from './gist.component';

@NgModule({
  declarations: [GistComponent],
  exports: [GistComponent],
  imports: [CommonModule],
})
export class NgxGistModule {}
