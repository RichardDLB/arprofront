import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { SPersonaService } from 'src/app/service/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  persona:Persona=new Persona("", "", "", "", "", "", "");

  constructor(public servicePersona:SPersonaService){}

  ngOnInit(): void {
    this.servicePersona.getPersona().subscribe(data => {this.persona = data})
  }


}
