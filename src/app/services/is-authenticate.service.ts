import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Alumno, Usuario } from '../model/Usuario';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class IsAuthenticateService {

  constructor(
    private user : Usuario , 
    private storageServices : StorageService , 
    private alumno : Alumno) 
    { }




  loginUser(user){
    return new Promise((accept, reject)=>{
      if(user.nombreUsuario == localStorage.getItem('usuario')  && user.password == localStorage.getItem('contrasena')){
        user.isActive = 1
        this.storageServices.saveStorage(user.isActive)
        localStorage.setItem("isAuthenticate" , "1")
        localStorage.setItem("nombreUsuario" , user.nombreUsuario)
        accept("Login correcto")
      } else {
        this.user.isActive = 0
        
        reject("Login incorrecto")
      }
    })
  }


  
  allwaysAuth(){
    return new Promise((accept, reject)=>{
      if(localStorage.getItem('isAuthenticate') == "1"){
        accept("se puede ingresar")
      }else{
        reject("No se puede ingresar")
      }
    })
    
  }
}
