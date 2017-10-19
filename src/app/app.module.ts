import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DevicePage } from '../pages/device/device';
import { SubDevicePage } from '../pages/device/sub-device/sub-device';
//import { SubDevice2Page } from '../pages/sub-device2/sub-device2';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';

import { BackButtonService } from '../services/backButton.service';
import { HttpModule } from '@angular/http';
//import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { NativeService } from '../providers/NativeService';

//import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { FileOpener } from '@ionic-native/file-opener';//app.component里也加了,会不会重复包涵

@NgModule({  //所有新建的页面都需要在 module 进行声明才能使用
  declarations: [//声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道
    MyApp,
    //AboutPage,
	DevicePage,
	SubDevicePage,
	//SubDevice2Page,
    ContactPage,
    HomePage,
    TabsPage,
	LoginPage,
	SettingPage
	//File,
	//FileTransfer,
	//FileTransferObject,
	//FileUploadOptions
  ],
  imports: [//本模块声明的组件模板需要的类所在的其它模块
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule
  ],
  bootstrap: [IonicApp],//指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
  entryComponents: [
    MyApp,
    //AboutPage,//用以对比ContactPage设置
	DevicePage,
	SubDevicePage,
	//SubDevice2Page,
    ContactPage,//用于测试修改,目标是改为"任务"页面
    HomePage,//改为设备页
    TabsPage,
	LoginPage,
	SettingPage
  ],
  providers: [//服务的创建者，并加入到全局服务列表中，可用于应用任何部分
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  BackButtonService
	//NativeService //Camera
  ]
})

export class AppModule {
	
	
}
