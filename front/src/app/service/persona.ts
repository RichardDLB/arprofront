import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mpersona } from '../model/mpersona';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {
  URL = 'https://argproback.onrender.com/persona/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Mpersona[]> {
    return this.httpClient.get<Mpersona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Mpersona> {
    return this.httpClient.get<Mpersona>(this.URL + `detail/${id}`);
  }

  public save(mpersona: Mpersona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', mpersona);
  }

  public update(id: number, mpersona: Mpersona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, mpersona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
