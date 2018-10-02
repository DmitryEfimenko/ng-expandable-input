import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './cdk/cdk.module#CdkModule', pathMatch: 'full' },
  { path: 'material', loadChildren: './material/material.module#MaterialModule' },
  { path: 'bootstrap', loadChildren: './bootstrap/bootstrap.module#BootstrapModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
