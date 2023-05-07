import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mhabilidades } from 'src/app/model/mhabilidades';
import { ShabilidadesService } from 'src/app/service/shabilidades.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {

  nombre!:string;
  porcentaje!:number;

  constructor(private shabilidades:ShabilidadesService, private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const habi = new Mhabilidades(this.nombre, this.porcentaje);
    this.shabilidades.save(habi).subscribe(
      data => {
        alert("Habilidad Agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
