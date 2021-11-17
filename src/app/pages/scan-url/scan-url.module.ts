import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanUrlPageRoutingModule } from './scan-url-routing.module';

import { ScanUrlPage } from './scan-url.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanUrlPageRoutingModule
  ],
  declarations: [ScanUrlPage]
})
export class ScanUrlPageModule {}
