import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagonisePage } from './diagonise';

@NgModule({
  declarations: [
    DiagonisePage,
  ],
  imports: [
    IonicPageModule.forChild(DiagonisePage),
  ],
  exports: [
    DiagonisePage
  ]
})
export class DiagonisePageModule {}
