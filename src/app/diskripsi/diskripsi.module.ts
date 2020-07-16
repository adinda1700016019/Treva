import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiskripsiPageRoutingModule } from './diskripsi-routing.module';

import { DiskripsiPage } from './diskripsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiskripsiPageRoutingModule
  ],
  declarations: [DiskripsiPage]
})
export class DiskripsiPageModule {}
