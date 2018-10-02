import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
  exports: [
    CommonModule,
    FlexLayoutModule,
    NgxGistModule,
    MatCardModule
  ]
})
export class SharedModule { }
