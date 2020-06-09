import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public url = '';
  public listUrl = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  validURL(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  }

  goUrl(url?){
    // http://192.168.8.105:8101/
    this.url = url ? url : this.url;
    window.open(this.url,'_self');
    this.addUrl();
  }

  setStatusBar(){
    this.statusBar.backgroundColorByName('white');
    this.statusBar.styleDefault();
  }

  getUrls(){
    this.listUrl = localStorage.getItem('urls') ? JSON.parse(localStorage.getItem('urls')).reverse() : [];
  }

  addUrl(){
    const list = localStorage.getItem('urls') ? JSON.parse(localStorage.getItem('urls')) : [];
    const newList:any = Array.from(new Set(list).add(this.url));
    localStorage.setItem('urls', JSON.stringify(newList));
    this.listUrl = newList.reverse();
  }

  removeUrl(url){
    const list = localStorage.getItem('urls') ? JSON.parse(localStorage.getItem('urls')) : [];
    const newList:any = list.filter(item => item !== url);
    localStorage.setItem('urls', JSON.stringify(newList));
    this.listUrl = newList.reverse();
  }

  async initializeApp(){
      await this.platform.ready();
      this.getUrls();
      await this.setStatusBar();
      this.splashScreen.hide();
  }

}
