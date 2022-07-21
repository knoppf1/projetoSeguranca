import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{ tap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly apiUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private router:Router) { }


  adicionar(data: any): Observable<any> {return this.http.post(this.apiUrl + 'formularios', data);
  }

  listar():Observable<any> {return this.http.get(this.apiUrl + 'formularios').pipe(
    tap((formularios: any) =>console.log('Res lista formularios', formularios))
  );
  }

  delete(id: number): Observable<any> {
    console.log('deletando', id)
    return this.http.delete(this.apiUrl + 'formularios/'+id);
  }

  editar(id: number, data: any): Observable<any> {
    console.log('id',id);
    console.log('dados',data);
    return this.http.put(this.apiUrl+'formularios/'+id,data);
  }

  buscar(id: number): Observable<any> {
    return this.http.get(this.apiUrl+'formularios/'+id);
  }
}
