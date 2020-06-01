import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// interceptor
import { LOGGER_INTERCEPTOR } from './interceptors/logger/logger.service';
import { HEADER_INTERCEPTOR } from './interceptors/headers/headers.service';
import { FORM_DATA_INTERCEPTOR } from './interceptors/form-data/form-data.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LOGGER_INTERCEPTOR,
    HEADER_INTERCEPTOR,
    FORM_DATA_INTERCEPTOR,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
