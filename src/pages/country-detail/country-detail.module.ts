import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryDetail } from './country-detail';

@NgModule({
  declarations: [
    CountryDetail,
  ],
  imports: [
    IonicPageModule.forChild(CountryDetail),
  ],
  exports: [
    CountryDetail
  ]
})
export class CountryDetailModule {}
