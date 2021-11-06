import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { IsAuthenticateService } from 'src/app/services/is-authenticate.service';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  public usuario: Usuario;
 
  errorMessage : String = "";
  

  constructor(private router: Router, 
    private toastController: ToastController, 
    private authService : IsAuthenticateService,
    private storage : Storage,
    private storageServices : StorageService) {

    
    this.usuario = new Usuario();
    


    
  }
  

  public ngOnInit():void {
     
  }

  public ingresar(): void {
    this.authService.loginUser(this.usuario).then(res => {
      const navigationExtras : NavigationExtras = {
        state:{ usuario : this.usuario}
      }
      this.errorMessage = "";
      this.mostrarMensaje('¡Bienvenido!');
      this.router.navigate(['/home'], navigationExtras);
      
      
      
    })
  }

  

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}
