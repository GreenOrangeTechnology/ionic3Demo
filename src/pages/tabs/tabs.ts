import { Component,ViewChild } from '@angular/core';
import {Platform,Tabs} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DevicePage } from '../device/device';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { BackButtonService } from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  /*tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;*/
  @ViewChild('myTabs') tabRef: Tabs;
  
  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {
    //以下内容为9.2新增
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',//10.15由Home变为Device
        tabIcon: 'home'//tab如何由底部放到上面
      },
	  {
        root: DevicePage,
        tabTitle: 'Device',
        tabIcon: 'car'
      },
      {
        root: ContactPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications'
      },
      {
        root: AboutPage,
        tabTitle: 'About',
        tabIcon: 'document'
      },
	  {
		  root:SettingPage,
		  tabTitle:'设置',
		  tabIcon:'person'
	  }
    ];
	platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(this.tabRef);
      });
  }
}
