import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { IsAuthenticateService } from '../services/is-authenticate.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  
  constructor( 
    private usuario : Usuario , 
    private authService : IsAuthenticateService , 
    private router : Router
    ){}
  canActivate(){
    if(localStorage.getItem("isAuthenticate") == "1"){
      this.router.navigate(['/home'])
      return false;
    }    
    else{
      return true;
    }
  }
  
  
}