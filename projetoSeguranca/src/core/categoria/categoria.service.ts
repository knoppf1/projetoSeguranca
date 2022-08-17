import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import{ tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {



    constructor(
      private http: HttpClient,
      private router:Router) { }


       //EndPoint Listar
  listar(idEmpresa: string | number, count: string | number | boolean, page: string | number | boolean, filter: string = ""): Observable<any> {
    let params = new HttpParams();

    params = params.append('page', page);
    params = params.append('count', count);

    //Filtra a Pesquisa
    if (filter != "") {
      params = params.append('filter', filter);
    }
    return this.http.get(environment.apiUrl + 'categoria/list/' + idEmpresa, { params: params });
  }


    adicionar(data: any): Observable<any> {return this.http.post(environment.apiUrl + 'categoria', data);
    }

    // listar():Observable<any> {return this.http.get(environment.apiUrl + 'Categoria/1').pipe(
    //   tap(cadastros =>console.log('Res lista Favoritotos', cadastros))
    // );
    // }

    delete(id: number): Observable<any> {
      console.log('deletando', id)
      return this.http.delete(environment.apiUrl + 'categoria/'+id);
    }

    editar(id: number, data: any): Observable<any> {
      console.log('id',id);
      console.log('dados',data);
      return this.http.put(environment.apiUrl+'categoria/'+id,data);
    }

    buscar(id: number): Observable<any> {
      return this.http.get(environment.apiUrl+'categoria/'+id);
    }

    listarAtivos(idEmpresa: number): Observable<any> {
      return this.http.get(environment.apiUrl + 'categoria/listAtivo/'  + idEmpresa);
    }
}
