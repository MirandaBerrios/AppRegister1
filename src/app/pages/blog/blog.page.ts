import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  alumnos
  constructor(public apicon : ApiConnectService) { }
  
  ngOnInit() {
    this.apicon.conexion()
    .subscribe(
      (data)=> {this.alumnos = data;},
      (error)=> {console.log(error);}
    )
  }

  ionViewDidLoad(){
   
  }


}
