import { Component, OnInit } from '@angular/core';
import { Mproyectos } from 'src/app/model/mproyectos';
import { SproyectosService } from 'src/app/service/sproyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyec: Mproyectos[]=[];

  constructor(private sproyectos: SproyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.sproyectos.lista().subscribe(data => { this.proyec = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sproyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }


}
