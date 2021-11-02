import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Usuario } from './model/Usuario';
import { Storage } from '@ionic/storage';
import { StorageService } from './services/storage.service';
import { DbFuntionService } from './services/db-funtion.service';
import { IsAuthenticateService } from './services/is-authenticate.service';
import { ApiConnectService } from './services/api-connect.service';
import { HttpClientModule} from '@angular/common/http'
import { LoginGuardService } from './guards/login-guard.service';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Usuario, Storage, StorageService , DbFuntionService , IsAuthenticateService , SQLite , ApiConnectService , LoginGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {

  private db: SQLiteObject;

  constructor(private platform: Platform) {
    // this.platform.ready().then(() => {
    //   const sqlite: SQLite = new SQLite();
    //   sqlite.create({
    //     name: 'data.db',
    //     location: 'default'
    //   })
    //     .then((db) => {
    //       console.log('Asignar la BD a una propiedad de la clase.');
    //       this.db = db;
    //       db.executeSql('CREATE TABLE IF NOT EXISTS usuarios(user VARCHAR(50), password VARCHAR(8), question VARCHRA(70))', [])

    //         .then(() => {
    //           console.log('La tabla fue creada.');
              
    //         })
    //         .catch(e => {
    //           console.log('Error al crear la tabla con CREATE TABLE.');
    //           console.log(e);
    //         });
    //     })
    //     .catch(e => {
    //       console.log('Error al crear la BD con sqlite.create.');
    //       console.log(e);
    //     });
    // });
  }

}
