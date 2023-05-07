import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mproyectos } from '../model/mproyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SproyectosService {

  URL = 'http://localhost:8080/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Mproyectos[]> {
    return this.httpClient.get<Mproyectos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Mproyectos> {
    return this.httpClient.get<Mproyectos>(this.URL + `detail/${id}`);
  }

  public save(mproyectos: Mproyectos): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', mproyectos);
  }

  public update(id: number, mproyectos: Mproyectos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, mproyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
