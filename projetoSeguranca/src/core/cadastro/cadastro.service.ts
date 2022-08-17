import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import{ tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly apiUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private router:Router) { }


  adicionar(data: any): Observable<any> {return this.http.post(this.apiUrl + 'cadastros', data);
  }

  listar():Observable<any> {return this.http.get(this.apiUrl + 'cadastros').pipe(
    tap(cadastros =>console.log('Res lista Favoritotos', cadastros))
  );
  }

  delete(id: number): Observable<any> {
    console.log('deletando', id)
    return this.http.delete(this.apiUrl + 'cadastros/'+id);
  }

  editar(id: number, data: any): Observable<any> {
    console.log('id',id);
    console.log('dados',data);
    return this.http.put(this.apiUrl+'cadastros/'+id,data);
  }

  buscar(id: number): Observable<any> {
    return this.http.get(this.apiUrl+'cadastros/'+id);
  }


}
