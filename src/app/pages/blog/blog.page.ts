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
  public data_update = '';
  alumnos = []; 
  user = localStorage.getItem('nombreUsuario');
  datos : any;

  data_lapiz = {
    "alumno_id" : "",
    "nombre" : "",
    "apellido" : "",
    "contrasena" : "",
    "isAuthenticate" : "",
    "publicacion" : ""
  }

  constructor(public apicon : ApiConnectService , public router : Router ) {
    
   }
    url = 'https://544a-2803-c180-2002-97a2-4557-f964-9353-8450.ngrok.io'+'/postalumno';
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
   
  update(){
    this.data_update =   ((document.getElementById("datoUpdate") as HTMLInputElement).value) ;
    console.log("any?");
    let dl = this.data_lapiz
    fetch(
      this.url + "/" + dl.alumno_id, {
     method: 'PUT',
     headers: new Headers({
       'Content-Type': 'application/json', 'access-control-allow-origin': '*'
     }),
     body: JSON.stringify({"publicacion" : this.data_update})
     }).then(()=>
     location.reload());
     
     
  }


  modificar_html(){ 
    
    const data = document.getElementById('input_update');
    let HtmlString = '<ion-card style="color: rgb(0, 61, 106) ;" *ngFor= "let y of alumnos" class="feed_news"><ion-label><h1>{{ y.nombre + "  " + y.apellido + " " + y.alumno_id}}</h1></ion-label><div  style="display: flex;"><ion-input style="font-size: large; color:rgb(0, 61, 106);" [(ngModel)]="data_update" type="text" placeholder="Actualiza los datos"></ion-input>    <ion-icon size="large" id="btn_send" (click) ="update()"  name="paper-plane-outline"></ion-icon></div>  <ion-label id="date">17:00 01-11-2021</ion-label></ion-card>' 
    data.innerHTML = HtmlString
    
    
  }
  // guardar_datos(id, nombre , apellido, contrasena , isAuthenticate){
  //   var datos = [ id , nombre , apellido ,contrasena , isAuthenticate] 
  //   return datos
  // }

  lapiz(id , nombre , apellido , contrasena , isAuthenticate){
    this.data_lapiz =
    {
      "alumno_id" : id,
       "nombre" : nombre,
       "apellido" : apellido,
       "contrasena" : contrasena,
       "isAuthenticate" : isAuthenticate , 
       "publicacion" : ""
    }
    console.log(this.data_lapiz)

    let changeHtml = document.getElementById(id);
    let code = '<div style="display : flex;" ><ion-input id = "datoUpdate" class="input_txt"  type="text" placeholder="Escribe acá tu nueva publicacion"></ion-input><ion-icon size="large" id="btn_send" (click) ="as()"  name="paper-plane-outline"> </ion-icon></div>';
    changeHtml.innerHTML = code;
    console.log(this.data_lapiz.alumno_id)
    return this.data_lapiz;
  }


  ionChange( event : any){
    console.log(event.detail.value)
    console.log(event)

  }
}



