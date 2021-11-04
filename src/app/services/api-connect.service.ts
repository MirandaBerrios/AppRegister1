import { Injectable } from '@angular/core';
import { HttpClientModule  , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  httpOption = {
    headers : new HttpHeaders({
      'content-type': 'application/json',
      'acces-control-allow-origin': '*'
    })
  }
  constructor() { }

 get_all_blog() {
    let url = 'https://0958-2803-c180-2002-97a2-a574-b8b2-e534-a527.ngrok.io/alumno';
     fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json', 'access-control-allow-origin': '*'
      })
      })
    .then((resp) => resp.json())
    .then((js) => console.log(js));
  }

  update_log() {
    let url = 'https://dcc4-2803-c180-2002-97a2-5843-bcc3-5163-7d17.ngrok.io/blog';
     fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json', 'access-control-allow-origin': '*'
      })
      })
    .then((resp) => resp.json())
    .then((js) => console.log(js));
  }
  
  delete(){

  }
   
  post(){
    let url = 'https://dcc4-2803-c180-2002-97a2-5843-bcc3-5163-7d17.ngrok.io/blog';
            let data = {'name': 'danigm'};
            fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
              })
            .then(resp => resp.json())
            .then(datos => console.log(datos));
  }

  
}

