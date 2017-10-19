﻿import { Injectable } from '@angular/core';
import { Platform, ToastController, App, NavController, Tabs } from 'ionic-angular';

@Injectable()
export class BackButtonService {

  //����Ӳ�����ذ�ť�Ƿ񴥷���Ĭ��false
  backButtonPressed: boolean = false;

  //���캯�� ����ע��
  constructor(public platform: Platform,
              public appCtrl: App,
              public toastCtrl: ToastController) { }

  //ע�᷽��
  registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction��ϵͳ�Դ��ķ���
    this.platform.registerBackButtonAction(() => {
      //��ȡNavController
      let activeNav: NavController = this.appCtrl.getActiveNav();
      //������Է�����һҳ����ִ��pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
          //ִ���˳�
          this.showExit();
        } else {
          //ѡ����ҳ��һ���ı�ǩ
          tabRef.select(0);
        }
      }
    });
  }

  //�˳�Ӧ�÷���
  private showExit(): void {
    //���Ϊtrue���˳�
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //��һ�ΰ�������Toast
        this.toastCtrl.create({
            message: 'press back again to exit',
            duration: 2000,
            position: 'top',
			showCloseButton:true,
			closeButtonText:"Close"
        }).present();
      //���Ϊtrue
      this.backButtonPressed = true;
      //�������Ϊfalse������˳��Ļ����Ͳ���ִ����
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
}