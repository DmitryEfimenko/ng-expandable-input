import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CdkComponent } from './cdk/cdk.component';

const routes: Routes = [
  { path: '', component: CdkComponent, pathMatch: 'full' },
  { path: 'material', loadChildren: './material/material.module#MaterialModule' },
  { path: 'bootstrap', loadChildren: './bootstrap/bootstrap.module#BootstrapModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
