import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {


  itens: any[] = [];
  idEmpresa: number = 1;


  constructor(
    private usuarioService : UsuarioService,
  ) { }

  ngOnInit(): void {

    this.loadAtivos()
  }


  delete(id: number) {
    if(confirm('Você deseja excluir o resgitro?')){
      this.usuarioService.delete(id).subscribe(res =>{
      this.loadAtivos();
      });
    }
  }


  //Banco de dados

  loadAtivos() {
    this.usuarioService.listarAtivos().subscribe(res => {
      console.log('Lista de Ativos', res);
      this.itens=res;
    });
  }

}
