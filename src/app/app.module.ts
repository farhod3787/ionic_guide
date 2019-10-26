import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { SelectHotelComponent } from './select-hotel/select-hotel.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SelectRestComponent } from './select-rest/select-rest.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SelectLangComponent,
    SelectHotelComponent,
    RestaurantsComponent,
    SelectRestComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
