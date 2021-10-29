import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { IsAuthenticateService } from '../services/is-authenticate.service';


@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  
  constructor( private usuario : Usuario , private authService : IsAuthenticateService){}
  canActivate(){
    if(this.authService){
      return true;
    }    
    else{
      return false;
    }
  }
  
  
}
