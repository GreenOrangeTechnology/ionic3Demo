import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DevicePage } from '../pages/device/device';
import { SubDevicePage } from '../pages/device/sub-device/sub-device';
//import { SubDevice2Page } from '../pages/sub-device2/sub-device2';
//import { Camera,CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';

//import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { FileOpener } from '@ionic-native/file-opener';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;//LoginPage;//开发时先用这个模式,省略密码(admin 123456) Login模块还需完善内容:点击按钮显示密码  忘记密码 注册链接(页面)

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen/* ,private camera: Camera *//*,private transfer:FileTransfer,private file: File,private fileOpener: FileOpener*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  // camera设置选项 http://blog.csdn.net/zahngjialiang/article/details/54632514
  //http://blog.csdn.net/qq_15096707/article/details/70239990
  //https://segmentfault.com/a/1190000011099097
	/* private cameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
} */
  
/* this.camera.getPicture(this.cameraOptions).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
}); */

  /*
  //10.16File功能
  upload() {
  // ionic 官方文档例子漏写了这句话
  // http://ionicframework.com/docs/native/file-transfer/
  //
  const fileTransfer: FileTransferObject = this.transfer.create();
  // 更多的 Options 可以点进去自己看看，不懂的就谷歌翻译他的注释
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'name.jpg',  // 文件类型
    headers: {},
    params: {}    // 如果要传参数，写这里
    
  }

  fileTransfer.upload('<file path>', '<api endpoint>', options)
  .then((data) => {
    // success
  }, (err) => {
    // error
  })
  }
  
  //官方示例download例子
  download() {
  const url = 'http://www.example.com/file.pdf';//找个确认pdf可以下载成功的文件,保存路径:如果是 iOS 或者 Android 6 及以上的版本，则保存路径使用this.file.dataDirectory + 'file.pdf' 否则使用 'file:///storage/sdcard0/Download/' + 'file.pdf'
  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });
  
  //显示进度
fileTransfer.onProgress(progressEvent => {
  if (progressEvent.lengthComputable) {
    // 下载过程会一直打印，完成的时候会显示 1
    console.log(progressEvent.loaded / progressEvent.total);
  } else {

  }
});

	//文件下载成功后
	// entry.nativeURL 是上面那个插件文件下载后的保存路径
this.fileOpener.open(entry.nativeURL, this.getFileMimeType(fileType))
  .then(() => {//第二个参数不是文件类型，而是 MIMEType
    console.log('打开成功');
  })
  .catch(() => {
    console.log('打开失败');
  });
	*/
}
