import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mhabilidades } from '../model/mhabilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShabilidadesService {

  URL = 'https://bdback.onrender.com/habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Mhabilidades[]> {
    return this.httpClient.get<Mhabilidades[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Mhabilidades> {
    return this.httpClient.get<Mhabilidades>(this.URL + `detail/${id}`);
  }

  public save(mhabilidades: Mhabilidades): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', mhabilidades);
  }

  public update(id: number, mhabilidades: Mhabilidades): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, mhabilidades);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
