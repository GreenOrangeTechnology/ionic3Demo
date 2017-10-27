import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//socket.io与服务端进行通信
/**
 * Generated class for the SubDevicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-device',
  templateUrl: 'sub-device.html',
})
export class SubDevicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      let userInfo = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubDevicePage');
	//进来后就判断灯是否亮的状态(亮的话将亮度值传到页面进行显示)-与服务器进行连接
  }
  
  //关灯
  
  //开灯
  
  //调节亮度值
  
  getLightValue() {
    //let x = document.getElementById("myRange").value;
    //document.getElementById("demo").innerHTML = x;
	
	
  }
  
  toggleChange(){
	  //let lightState;
    alert("change");
    
    //console.log();
  }

}
