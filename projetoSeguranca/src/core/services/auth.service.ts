import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { NgPopupsService } from 'ng-popups';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;

  constructor(

    private http: HttpClient,
    // private ngPopups: NgPopupsService
  ) {
    this.token = localStorage.getItem('tokenecontadi');
  }

  login(data: any) {
    console.log('Data Login', data)
    return this.http.post<any>(environment.apiUrl + 'authentication', data).pipe(map(res => {
      console.log('AUTH LOGIN token', res);
      //Valida se houve erro no login
      if (res.msgErro != null && res.msgErro != "") {
        console.log ('Erro Login')
        // this.ngPopups.alert(res.msgErro,{
        //   theme: 'default',
        //   okButtonText: 'Ok',
        //   cancelButtonText: 'Cancelar',
        //   color: 'blue',
        //   title: 'Aviso!'
        // });
      //Grava o Token na Sessao Local e Retorna o Token
      } else {
        if (res.token) {
          this.token = res.token;
          localStorage.setItem('tokenecontadi', this.token);
        };
      };

      return res;
    }));
  }

  logout() {
    localStorage.removeItem('tokenecontadi');
  }

  // decodeToken() {
  //   try {
  //     let token = localStorage.getItem('tokenecontadi');
  //     return jwt_decode(token)
  //   } catch (Error) {
  //     return null;
  //   }
  // }


}
