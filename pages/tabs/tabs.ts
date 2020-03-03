import { Component } from '@angular/core';

import{ HeaderPage } from '../header/header';
import { AttributesPage } from '../attributes/attributes';
import { SkillsPage } from '../skills/skills';
import { WeaponsPage } from '../weapons/weapons';
 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  headerRoot = HeaderPage;
  tab1Root = AttributesPage; 
  tab2Root = SkillsPage;
  tab3Root = WeaponsPage;

  constructor() {

  }
}
