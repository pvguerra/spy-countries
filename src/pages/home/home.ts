import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Rest } from '../../providers/rest';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: Rest) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries().subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error
    );
  }

  countryTapped(event, country) {
    this.navCtrl.push("CountryDetail", {
      country: country
    });
  }

}
