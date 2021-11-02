import { Component } from '@angular/core';
import { SQLite ,SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Usuario } from './model/Usuario';
import { DbFuntionService } from './services/db-funtion.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private sql : SQLite,
    private dbFunt : DbFuntionService,
    private user : Usuario
    ) {

  }

  createDb(){
    let db = this.sql.create({
      name: 'data.db',
      location : 'default'
    }).then((db)=> {
    this.dbFunt.createTable(db);}
    ) 
  }
}
