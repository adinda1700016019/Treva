import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiskripsiPage } from './diskripsi.page';

const routes: Routes = [
  {
    path: '',
    component: DiskripsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiskripsiPageRoutingModule {}
