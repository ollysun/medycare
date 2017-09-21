import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryDetailPage } from './history-detail';

@NgModule({
  declarations: [
    HistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryDetailPage),
  ],
  exports: [
    HistoryDetailPage
  ]
})
export class HistoryDetailPageModule {}
