import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicStorageModule} from "@ionic/storage";

import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {Camera} from "@ionic-native/camera/ngx";
import {Geolocation} from "@ionic-native/geolocation/ngx";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicStorageModule.forRoot(),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        Geolocation,

    ]
})
export class NativeModule {
}
