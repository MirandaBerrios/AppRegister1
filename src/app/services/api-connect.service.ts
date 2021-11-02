import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(public http : HttpClient) { }

conexion(){
  console.log('donde estás corazon')
  return this.http.get('http://localhost:8000/alumno');
}


}
