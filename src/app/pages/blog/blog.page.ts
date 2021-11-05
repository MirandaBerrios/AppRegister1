import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConnectService } from 'src/app/services/api-connect.service';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  data_update = '';
  alumnos = []; 
  user = localStorage.getItem('nombreUsuario');
  datos : any;
  constructor(public apicon : ApiConnectService , public router : Router ) {
    
   }
    url = 'https://b568-2803-c180-2002-97a2-5db5-beee-ee94-a1.ngrok.io'+'/postalumno';
  ngOnInit() {
    this.get_all_blog()
      
  }

  delete(id){
    fetch(
      this.url + "/" + id, {
     method: 'DELETE',
     headers: new Headers({
       'Content-Type': 'application/json', 'access-control-allow-origin': '*'
     })
     }).then(()=>
     location.reload());
     console.log('Elimina3')
  }
  async get_all_blog() { 
     fetch(
       this.url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json', 'access-control-allow-origin': '*'
      })
      })
    .then((data) =>  data.json() )
    .then((js) =>
    {for (let index = 0; index < js.postalumno.postalumno.length; ++index) {
      const element = js.postalumno.postalumno[index];
      this.alumnos.push(element );
    console.log(element);
    console.log(element.nombre)
    }  
    });  
  }
   
  update(id, nombre , apellido, contrasena , isAuthenticate){
    if(this.data_update.length > 0){
      console.log("entra")
    fetch(
      this.url + "/" + id, {
     method: 'PUT',
     headers: new Headers({
       'Content-Type': 'application/json', 'access-control-allow-origin': '*'
     }),
     body: JSON.stringify({"alumno_id": id , "nombre" : nombre, "apellido" : apellido , "contrasena": contrasena , "publicacion" : this.data_update , "isAuthenticate":isAuthenticate})
     }).then(()=>
     location.reload());
     
    }else{
      console.log(this.data_update);
      console.log('no entra al fetch')
    }
  }


  modificar_html(){ 
    
    const data = document.getElementById('input_update');
    let HtmlString = '<ion-card style="color: rgb(0, 61, 106) ;" *ngFor= "let x of alumnos" class="feed_news"><ion-label><h1>{{ x.nombre + "  " + x.apellido + " " + x.alumno_id}}</h1></ion-label><div  style="display: flex;"><ion-input style="font-size: large; color:rgb(0, 61, 106);" [(ngModel)]="data_update" type="text" placeholder="Actualiza los datos"></ion-input><ion-icon size="large" id="btn_send" (click) ="update(x.alumno_id,x.nombre,x.apellido, x.contrasena,  x.isAuthenticate )"  name="paper-plane-outline"></ion-icon></div>  <ion-label id="date">17:00 01-11-2021</ion-label></ion-card>' 
    data.innerHTML = HtmlString
    
  }
  // guardar_datos(id, nombre , apellido, contrasena , isAuthenticate){
  //   var datos = [ id , nombre , apellido ,contrasena , isAuthenticate] 
  //   return datos
  // }

  as(){
    console.log("jasldkjalsk")
  }
}



