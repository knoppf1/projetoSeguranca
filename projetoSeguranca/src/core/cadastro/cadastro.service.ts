import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import{ tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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


}
