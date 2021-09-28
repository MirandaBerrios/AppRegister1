import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../model/Usuario';
import { NivelEducacional } from '../../model/NivelEducacional';
import { Persona } from '../../model/Persona';
import { ToastController } from '@ionic/angular';
import { Animation , AnimationController  } from '@ionic/angular';
import { transition, animate, style, trigger, state} from '@angular/animations';
import { posix } from 'path';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('llamarAnimacion'
    ,[state('void'
    ,style({transform: 'translateX(-100%)',opacity:0}))
    ,transition(':enter',[animate(600,style({transform: 'translateX(0)',opacity:1}))])])]
})

export class HomePage implements OnInit {

  public usuario: Usuario;

  public nivelesEducacionales: NivelEducacional[] = [
    {id: 1, nombre: 'Básica Incompleta'},
    {id: 2, nombre: 'Básica Completa'},
    {id: 3, nombre: 'Media Incompleta'},
    {id: 4, nombre: 'Media Completa'},
    {id: 5, nombre: 'Superior Incompleta'},
    {id: 6, nombre: 'Superior Completa'}
  ];

  public persona: Persona = new Persona();

  /*
    En el constructor del HomePage se ponen como parametros los siguientes objetos:
      (1) activeroute (del tipo de dato ActivatedRoute) y router (del tipo de dato Router),
      que se usarán para obtener los datos enviados por la página que invocó a "home".
      (2) alertController (del tipo de dato AlertController), que se usará para mostrar
      mensajes emergentes en la pantalla.

    Nótese que los parámetros tuvieron que declararse con "private", y esto es necesario
    para que los parámetros pasen a considerarse automáticamente como propiedades
    de la clase "HomePage" y de este modo puedan usarse dentro de los otros métodos.
   */
   constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private toastController: ToastController
      , private animationCtrl : AnimationController
       
      ) {
        
        
        
    // Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

      } else {
        /*
          Si no vienen datos extra desde la página anterior, quiere decir que el usuario
          intentó entrar directamente a la página home sin pasar por el login,
          de modo que el sistema debe enviarlo al login para que inicie sesión.
        */
        this.router.navigate(['/login']);
      }

  });

  
  

}
  
  

public ngOnInit() {
  const animation : Animation = this.animationCtrl.create()
  .addElement(document.querySelector('.titulo'))
  .duration(2000)
  .iterations(Infinity)
  .fromTo('opacity', '1','0.2')
  
  const movName : Animation = this.animationCtrl.create()
        .addElement(document.querySelector('#nombreUsuario'))
        .duration(2000)
        .iterations(2)
        .from('transform', 'translateX(100%)')

  animation.play();
  movName.play(); 

  
    
}
 public ngOnDestroy(){
   
 }

  public registrar_asistencia(): void {      
    this.router.navigate(['/scan']); 
  }


  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
}
