import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//Firebase Setup
// https://github.com/angular/angularfire2
//Find Environment File and setup the firebase credentials
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

//HttpClient

import { ComponentsModule } from './components/components.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PipesModule } from './pipes/pipes.module';
import { HttpModule } from '@angular/http';

//FiveThree Liabrary
// https://github.com/fivethree-team/ionic-4-components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FivethreeCoreModule } from '@fivethree/core';


//FontAwesome Icons
//https://stackoverflow.com/questions/54324300/how-do-you-add-font-awesome-to-ionic-4
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab)

//Native Plugins
//https://ionicframework.com/docs/native/stripe
import { Stripe } from "@ionic-native/stripe/ngx";

// https://ionicframework.com/docs/native/in-app-browser
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

// https://ionicframework.com/docs/native/paypal/
import { PayPal } from "@ionic-native/paypal/ngx";

// https://ionicframework.com/docs/native/camera
import { Camera } from "@ionic-native/camera/ngx";

// https://ionicframework.com/docs/native/barcode-scanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// https://ionicframework.com/docs/native/google-plus
import { GooglePlus } from '@ionic-native/google-plus/ngx';

// import { Facebook } from '@ionic-native/facebook/ngx';

//Translate Serives
//https://ionicframework.com/docs/v3/developer-resources/ng2-translate/
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// FiveThree Librarys

import { MarkdownModule } from 'ngx-markdown';
import { LottieAnimationViewModule } from 'ng-lottie';

//Page Modules
import { SignaturePickerPageModule } from './modals/signature-picker/signature-picker.module';



export function customTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({

  declarations: [AppComponent],
  entryComponents: [],

  imports: [ 
    FormsModule,  
    MbscModule, 
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FivethreeCoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'ionic4'),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    PipesModule,
    SignaturePickerPageModule,
    FontAwesomeModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    LottieAnimationViewModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stripe,
    InAppBrowser,
    PayPal,
    Camera,
    BarcodeScanner,
    GooglePlus,
    // Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
