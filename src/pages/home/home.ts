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
		this.navCtrl.push(SubDevicePage,{username:'kjw',password:123456});//法1:新页面推送到堆栈(跳转到灯光页面),第二个参数可带参
																		//{id: "123",name: "Carl"}
		//法2:	[navParams]属性：Component的类里带的参数params: Object;pushPage: any;constructor(){this.pushPage= LoginPage;this.params ={ id:42};}
		//<button ion-button [navPush]="pushPage"[navParams]="params">
		
		//法3:modal的create方法(第二个参数)
		//let modal =this.modalCtrl.create(SubDevicePage,{username:'kjw',password:123456});
		//modal.present();

		//法4:url传值   法5:tab传值

		//统一在NavParams类接收参数
	}
}