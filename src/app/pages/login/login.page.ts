import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { IsAuthenticateService } from 'src/app/services/is-authenticate.service';
import { Storage } from '@ionic/storage';
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
    private storage : Storage) {

    
    this.usuario = new Usuario();
    
    // this.usuario.nombreUsuario = '';
    // this.usuario.password = '';

    
  }

  grabar_data(){
    let usuario : Usuario = {
      nombreUsuario: "mrgatita",
      password : "1234"
    }
    this.storage.set("usuario" , Usuario); 
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
      this.router.navigate(['/home'], navigationExtras)
    })
    // if(!this.validarUsuario(this.usuario)) {
    //   return;
    // }


    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     usuario: this.usuario
    //   }
    // };
    // this.router.navigate(['/home'], navigationExtras); 
  }

  // public validarUsuario(usuario: Usuario): boolean {

  //   const mensajeError = usuario.validarUsuario();

  //   if (mensajeError) {
  //     this.mostrarMensaje(mensajeError);
  //     return false;
  //   }

  //   return true;
  // }

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
