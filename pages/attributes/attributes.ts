import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../header/header';
import { Attribute } from '../../classes/attribute';

@Component({
  selector: 'page-attributes',
  templateUrl: 'attributes.html'
})
export class AttributesPage {
  public physique: Attribute = new Attribute();
  public strength: string;
  public constitution: string
  constructor(public navCtrl: NavController) {
  }

}
