import { Component, OnInit } from '@angular/core';
import { Mpersona } from 'src/app/model/mpersona';
import { SPersonaService } from 'src/app/service/persona';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  per: Mpersona[]=[];

  constructor(private spersona: SPersonaService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.spersona.lista().subscribe(data => { this.per = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.spersona.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo borrar la persona");
        }
      )
    }
  }


}
