import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgxGistModule } from './ngx-gist/ngx-gist.module';

@NgModule({
  exports: [CommonModule, FlexLayoutModule, NgxGistModule, MatCardModule],
  imports: [NgxGistModule],
})
export class SharedModule {}
