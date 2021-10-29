import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class IsAuthenticateService {

  constructor(private user : Usuario) { }
  loginUser(user){
    return new Promise((accept, reject)=>{
      if(user.nombreUsuario == "mrgatita" && user.password == "1234"){
        accept("Login correcto")
      } else {
        reject("Login incorrecto")
      }
    })
  }
}
