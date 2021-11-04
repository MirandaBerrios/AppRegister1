import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  
  alumnos = []; 
  constructor(public apicon : ApiConnectService) {
    
   }
  
  ngOnInit() {
    this.get_all_blog()
      
  }
  async get_all_blog() {
     
    let url = 'https://0958-2803-c180-2002-97a2-a574-b8b2-e534-a527.ngrok.io/alumno';
     fetch(
       url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json', 'access-control-allow-origin': '*'
      })
      })
    .then((data) =>  data.json() )
    .then((js) =>
    {for (let index = 0; index < js.alumno.alumno.length; ++index) {
      const element = js.alumno.alumno[index];
      this.alumnos.push(element );
    console.log(element);
    console.log(element.nombre)
    }
     
    });  
    
    
  }
}



