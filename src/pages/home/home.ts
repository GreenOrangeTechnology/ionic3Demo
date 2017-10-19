import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';//跳转使用
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {SubDevicePage} from '../device/sub-device/sub-device';
//import {SubDevice2Page} from '../sub-device2/sub-device2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	//接收数据用
	listData:Object;
  constructor(public navCtrl: NavController, private http: Http) {

  }
  
  ionViewDidLoad(){
	  //网络请求
	  /*this.http.request("http://jsonplaceholder.typicode.com/photos")
	  .subscribe((res:Response)=>{
		this.listData = res.json();
	  });
	  
	  //Promise方式
	  this.http.request('http://jsonplaceholder.typicode.com/photos')
	.toPromise()
	.then(res => { this.listData = res.json(); })
	.catch(err => { console.error(err) });
	  */
	  console.log('ionViewDidLoad HomePage');
  }
  
  
  
  jump(){
	  alert("123");
	  this.navCtrl.push(SubDevicePage);//跳转到灯光页面 
	  
  }

}
