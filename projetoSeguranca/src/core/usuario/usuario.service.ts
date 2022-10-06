import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private router:Router) { }


  adicionar(data: any): Observable<any> {
    console.log('Adicionar', data)
    return this.http.post(environment.apiUrl + 'Usuario/new', data);

  }


  editar(id: number, data: any): Observable<any> {
    console.log('id',id);
    console.log('dados',data);
    return this.http.put(environment.apiUrl+'Usuario/update',data);
  }

  buscar(id: number): Observable<any> {
    return this.http.get(environment.apiUrl+'Usuario/get/'+id);
  }


  listarAtivos(): Observable<any> {
   return this.http.get(environment.apiUrl + 'Usuario/listAtivo/');

 }

 delete(id: number): Observable<any> {
  console.log('deletando', id)
  return this.http.delete(environment.apiUrl + 'Usuario/delete/'+id);
}
}
