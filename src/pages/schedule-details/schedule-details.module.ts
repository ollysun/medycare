import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleDetailsPage } from './schedule-details';

@NgModule({
  declarations: [
    ScheduleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleDetailsPage),
  ],
  exports: [
    ScheduleDetailsPage
  ]
})
export class ScheduleDetailsPageModule {}
