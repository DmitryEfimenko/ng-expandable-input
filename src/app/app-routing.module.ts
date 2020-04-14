import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CdkComponent } from './cdk/cdk.component';

const routes: Routes = [
  { path: '', component: CdkComponent, pathMatch: 'full' },
  { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) },
  { path: 'bootstrap', loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
