import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/core/categoria/categoria.service';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario-view',
  templateUrl: './formulario-view.component.html',
  styleUrls: ['./formulario-view.component.scss']
})
export class FormularioViewComponent implements OnInit {
  id: number;
  frmFormulario: FormGroup;
  formBuilder: any;
  toastr: any;
  cardImageBase64: any;
  isImageSaved: boolean;
  categorias: any;
  idEmpresa: number =1;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private formularioService: FormularioService,
    private categoriaService: CategoriaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.frmFormulario= this.createForm();
    this.loadCategorias();
    if (this.id != 0){
      this.load();
      this.loadCategorias();

    }
  }


  createForm(): FormGroup {
    return this.fb.group({
     id : [this.id],
     nome : ['', Validators.required],
     telefone : [''],
     problema : [''],
     localizacao : [''],
     corHexa: ['#FF0000'],
     lat : [0],
     lng : [0],
     foto : [''],
     imagem : [''],
    });
  }

  get f() {
        return this.frmFormulario.controls;
  }

  load(){

      this.formularioService.buscar(this.id).subscribe(res =>{
        this.frmFormulario.patchValue(res);
      });

   }

   save(_$event: any) {
    if (this.frmFormulario.valid){
      console.log('Formulario Válido!', this.f)

      if(this.id != 0){
        this.formularioService.editar(this.id, this.frmFormulario.value).subscribe(res =>{
        });
      }
      else{
        this.formularioService.adicionar(this.frmFormulario.value).subscribe(res =>{
        });
      }
      this.router.navigateByUrl('/formulario', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/formulario/list']));
    }
    else{
      console.log('Formulario Invalido', this.f)
    }

  }

  //Carrega todas as categorias
  loadCategorias() {
    this.categoriaService.listarAtivos(this.idEmpresa,).subscribe(res => {
      console.log('loadCategorias', res);
      this.categorias = res;
    });
  }

  // loadImagem(fileInput: any) {
  //   this.formularioService.loadImage(fileInput).then((retorno) => {
  //     if (retorno.codigo == "OK") {
  //       this.cardImageBase64 = retorno.arquivo;
  //       this.isImageSaved = true;

  //       this.frmFormulario.value.imagem = retorno.arquivo;


  //     } else {
  //       this.toastr.error(null, retorno.msg);
  //     }
  //   });
  // }


}
