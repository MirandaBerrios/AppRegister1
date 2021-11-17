import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanUrlPage } from './scan-url.page';

const routes: Routes = [
  {
    path: '',
    component: ScanUrlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanUrlPageRoutingModule {}
