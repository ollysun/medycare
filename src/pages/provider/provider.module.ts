import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderPage } from './provider';

@NgModule({
  declarations: [
    ProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderPage),
  ],
  exports: [
    ProviderPage
  ]
})
export class ProviderPageModule {}
