import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtiketPageRoutingModule } from './etiket-routing.module';

import { EtiketPage } from './etiket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtiketPageRoutingModule
  ],
  declarations: [EtiketPage]
})
export class EtiketPageModule {}
