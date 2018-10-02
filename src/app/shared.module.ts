import { NgModule } from '@angular/core';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    CommonModule,
    FlexLayoutModule,
    NgxGistModule,
    MatCardModule
  ]
})
export class SharedModule { }
