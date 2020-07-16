import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtiketPage } from './etiket.page';

const routes: Routes = [
  {
    path: '',
    component: EtiketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtiketPageRoutingModule {}
