import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private user : Usuario , private storage : Storage) { 
    
   }


   async crearStorage(){
     await this.storage.create()
   }

   saveStorage(usuario : Usuario){
      this.storage.create().then (x => {
      this.storage.set("usuario", usuario)
    }).catch(()=>{
      console.log("No se ha podido guardar el usuario")
    })
   }

   
}
