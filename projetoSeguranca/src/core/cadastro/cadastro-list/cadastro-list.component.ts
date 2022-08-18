import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.scss']
})
export class CadastroListComponent implements OnInit {

  itens: any[] = [];
  idEmpresa: number = 1;


  constructor(
    private cadastroService : CadastroService,
  ) { }

  ngOnInit(): void {

    this.loadAtivos()
  }


  delete(id: number) {
    if(confirm('Você deseja excluir o resgitro?')){
      this.cadastroService.delete(id).subscribe(res =>{
      this.loadAtivos();
      });
    }
  }


  //Banco de dados

  loadAtivos() {
    this.cadastroService.listarAtivos(this.idEmpresa).subscribe(res => {
      console.log('Lista de Ativos', res);
      this.itens=res;
    });
  }

}
