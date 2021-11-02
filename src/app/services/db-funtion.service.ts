import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DbFuntionService {

  constructor(private user : Usuario ) {
   
  }

  createTable(db : SQLiteObject){
    db.executeSql('CREATE TABLE IF NOT EXISTS usuarios(user VARCHAR(50), password VARCHAR(8), question VARCHRA(70) , isActive INTEGER(1))', [])
    console.log('tabla creadísima');
  }

  insertTable(db : SQLiteObject , user : Usuario){
  let sql = `INSERT INTO usuarios (user, password , question , isActive) VALUES (?,?,?,?)`
  db.executeSql(sql ,[this.user.nombreUsuario,this.user.password, this.user.question, 0])
  }
}
