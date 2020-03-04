import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
export class HeaderPage {
  public name = 'Csúsz';
  public race = 'Gyíklény';
  public faith = 'Ateista';

  constructor(public navCtrl: NavController) {
  }

}
