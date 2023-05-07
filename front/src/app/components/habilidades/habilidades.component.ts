import { Component, OnInit } from '@angular/core';
import { Mhabilidades } from 'src/app/model/mhabilidades';
import { ShabilidadesService } from 'src/app/service/shabilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habili: Mhabilidades[]=[];

  constructor(private shabilidades: ShabilidadesService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void {
    this.shabilidades.lista().subscribe(data => { this.habili = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.shabilidades.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
