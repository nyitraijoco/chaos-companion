import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../header/header';

@Component({
  selector: 'page-attributes',
  templateUrl: 'attributes.html'
})
export class AttributesPage {
  public physique: string;
  public strength: string;
  public constitution: string
  constructor(public navCtrl: NavController) {

  }

}
