import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  itens: any[] = [];
  page: number = 1;
  total: number = 0;
  limit: number = 10;
  idEmpresa: number =1;
  search: string = '';


  constructor(
    private categoriaService : CategoriaService,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  // load(){
  //   console.log('Load');
  //   this.categoriaService.listar().subscribe((res)=>{
  //     this.itens=res;
  //   })
  // }


  load() {

    this.categoriaService.listar(this.idEmpresa, this.limit, this.page, this.search).subscribe((res) => {
      this.total = res.total;
      this.itens = res.dados;
      console.log('Retorno', this.itens)
    })
  }

  delete(id: number) {
    if(confirm('Você deseja excluir o resgitro?')){
      this.categoriaService.delete(id).subscribe(res =>{
      this.load();
      });
    }
  }

}
