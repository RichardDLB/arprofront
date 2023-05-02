import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/MPersona';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {
  URL= 'http://localhost:8080/personas/';

  constructor( private httpClient:HttpClient) {}

     public getPersona():Observable<Persona>{
      return this.httpClient.get<Persona>(this.URL+ 'get/perfil')
     }
   
}
