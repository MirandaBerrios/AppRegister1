import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConnectService } from 'src/app/services/api-connect.service';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { Router , ActivatedRoute} from '@angular/router';
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
    "contrasena" : "1111",
    "isAuthenticate" : "0",
    "publicacion" : ""
  }

   

  constructor(public apicon : ApiConnectService , public router : Router  , public activeRoute : ActivatedRoute) {
    
   }
    
    url1;
   
  url= localStorage.getItem('url') + '/postalumno'
 
    
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
    let code = '<div style="display : flex;" ><ion-input id = "datoUpdate" class="input_txt"  type="text" placeholder="Escribe acá tu nueva publicacion"></ion-input></div>';
    changeHtml.innerHTML = code;
    console.log(this.data_lapiz.alumno_id)
    return this.data_lapiz;
  }


  create(){
    let publicacion = ((document.getElementById("publicacion") as HTMLInputElement).value); 
    let user = localStorage.getItem("nombreUsuario")
    console.log(publicacion , user)

    fetch(
      this.url + "/" , {
     method: 'POST',
     headers: new Headers({
       'Content-Type': 'application/json', 'access-control-allow-origin': '*'
     }),
     body: JSON.stringify({"nombre" : user,"apellido" : "Duoc","contrasena" : "1111","isAuthenticate" : "0","publicacion" : publicacion})
     }).then(()=>
     location.reload());
    
    
   

  }
}



