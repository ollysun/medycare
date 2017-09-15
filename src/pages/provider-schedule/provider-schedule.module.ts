import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderSchedulePage } from './provider-schedule';

@NgModule({
  declarations: [
    ProviderSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderSchedulePage),
  ],
  exports: [
    ProviderSchedulePage
  ]
})
export class ProviderSchedulePageModule {}
