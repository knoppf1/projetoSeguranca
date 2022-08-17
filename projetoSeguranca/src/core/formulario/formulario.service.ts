import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{ tap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

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


  // loadImage(fileInput: any): Promise<any> {
  //   return new Promise((resolve, reject) => {

  //     var ret = { "codigo": "OK", "arquivo": "", "msg": "" };
  //     if (fileInput.target.files && fileInput.target.files[0]) {
  //       // Size Filter Bytes
  //       const max_size = 20971520;
  //       const allowed_types = ['image/png', 'image/jpeg'];
  //       const max_height = 15200;
  //       const max_width = 25600;

  //       if (fileInput.target.files[0].size > max_size) {
  //         ret.codigo = "ERROR";
  //         ret.msg = 'Imagem ultrapassa o tamanho máximo';
  //         resolve(ret);
  //       }
  //       if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
  //         ret.codigo = "ERROR";
  //         ret.msg = 'Tipo de imagem não permitido. Selecione JPG ou PNG';
  //         resolve(ret);
  //       }

  //       var reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         const image = new Image();
  //         image.src = e.target.result;
  //         image.onload = rs => {
  //           const img_height = rs.currentTarget['height'];
  //           const img_width = rs.currentTarget['width'];

  //           if (img_height > max_height && img_width > max_width) {
  //             ret.codigo = "ERROR";
  //             ret.msg = 'Imagem muito grande em largura e altura';
  //             resolve(ret);
  //           } else {
  //             const imgBase64Path = e.target.result;
  //             //Carrega a imagem base 64 no array de retorno
  //             ret.arquivo = imgBase64Path;
  //             resolve(ret);
  //           }
  //         };
  //       };
  //       reader.readAsDataURL(fileInput.target.files[0]);
  //     }
  //   })
  // }
}
