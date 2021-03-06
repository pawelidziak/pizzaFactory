import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatListModule} from '@angular/material';
import {LogStationComponent} from './log-station.component';

@NgModule({
  declarations: [
    LogStationComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatListModule,
  ],
  exports: [
    LogStationComponent
  ]
})
export class LogStationModule {
}
