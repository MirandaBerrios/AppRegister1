import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/Usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public alumno : Alumno;
  
  constructor() {
    this.alumno = new Alumno;
      }

  ngOnInit() {}
  

  registrar_alumno(){
    if(this.alumno.contrasena == this.alumno.re_contrasena){
      console.log("se autentica")
    }else{
      console.log("no se autentica")
    }
    
  }
}
