import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras , ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/model/Usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public alumno : Alumno;
  
  constructor(private router : Router  ) {
    this.alumno = new Alumno;
    
  }

  ngOnInit() {}
  

  registrar_alumno(){

    // acá hay que colocar el código para guardar el usuario 
    // quizás podríamos agregar el campo user para facilitar 
    // el inicio de sesión.

    if(this.alumno.contrasena == this.alumno.re_contrasena){
      
    this.alumno = {
       nombre : this.alumno.nombre,
       apellido : this.alumno.apellido, 
       contrasena : this.alumno.contrasena, 
       re_contrasena : this.alumno.re_contrasena,
       pista : this.alumno.pista , 
     }


     localStorage.setItem('usuario' , this.alumno.nombre);
     localStorage.setItem('contrasena' , this.alumno.contrasena)
     localStorage.setItem('pista', this.alumno.pista)
     let nombre_alumno = this.alumno.nombre + ' '  +  this.alumno.apellido
     localStorage.setItem('nombre_alumno', nombre_alumno)

     const navigationExtras : NavigationExtras = { state : this.alumno}
      console.log(this.alumno)
      this.router.navigate(['/login'] , navigationExtras)
      
    }else{
      console.log("no se autentica")
    }
    
  }
}
