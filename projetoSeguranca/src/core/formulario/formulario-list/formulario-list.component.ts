import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.scss']
})
export class FormularioListComponent implements OnInit {

  itens: any[] = [];

  constructor(
    private formularioService : FormularioService,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    console.log('Load');
    this.formularioService.listar().subscribe((res)=>{
      this.itens=res;
    })
  }

  delete(id: number) {
    if(confirm('Você deseja excluir o resgitro?')){
      this.formularioService.delete(id).subscribe(res =>{
      this.load();
      });
    }
  }


}
