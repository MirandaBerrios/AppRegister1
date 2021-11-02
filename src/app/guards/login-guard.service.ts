import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { IsAuthenticateService } from '../services/is-authenticate.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  
  constructor( private usuario : Usuario , private authService : IsAuthenticateService){}
  canActivate(){
    if(localStorage.getItem("isAuthenticate") == "1"){
      return false;
    }    
    else{
      return true;
    }
  }
  
  
}