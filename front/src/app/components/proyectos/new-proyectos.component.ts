import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mproyectos } from 'src/app/model/mproyectos';
import { SproyectosService } from 'src/app/service/sproyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombre!: string;
  descripcion!: string;
  img1!: string;
  img2!: string;
  img3!: string;

  constructor(private sproyectos:SproyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Mproyectos(this.nombre, this.descripcion, this.img1, this.img2, this.img3);
    this.sproyectos.save(pro).subscribe(
      data => {
        alert("Proyecto Agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
