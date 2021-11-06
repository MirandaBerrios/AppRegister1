import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { ToastController } from '@ionic/angular';
import { $ } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})



export class RecuperarClavePage implements OnInit {
  
   
  user =  {
    nombreUsuario : "mrgatita",
    password : "ballena",
    pista : "Mamífero más grande del mundo",
    isActive : 0
  };

  constructor(private toastController: ToastController , private usuario : Usuario , private router : Router) {
    
    
   }

  ngOnInit() {
  }
  
  showPass(){
    
    console.log("asdasd" , this.user.pista)
    if (this.user.nombreUsuario == "mrgatita" ) {
      let msj = "Pista : " + this.user.pista
     this.mostrarMensaje(msj, 4000);
      
    }else{
      let pista = document.getElementById("pista")
      let code = '<h2> usuario no registrado </h2>'
      pista.innerHTML = code
    }
  }

  goHome(){
    this.router.navigate(['/login'])
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
        duration: duracion? duracion: 4000
      });
    toast.present();
  }

}

