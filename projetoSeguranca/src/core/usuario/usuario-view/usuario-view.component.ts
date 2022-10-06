import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.scss']
})
export class UsuarioViewComponent implements OnInit {
  itens: any[] = [];
  id: number;
  frmForm: FormGroup;
  formBuilder: any;
  frmFormulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.frmForm = this.createForm();
    if (this.id != 0){
      this.load();
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
     id : [this.id],
     nome : [''],
     apelido : [''],
     email:[''],
     senha: [''],
     cargo : [''],
     tipo : [1],
     ativo:[1],
    });
  }

  get f() {
        return this.frmForm.controls;
  }


  load(){

      this.usuarioService.buscar(this.id).subscribe(res =>{
        this.frmForm.patchValue(res);
      });

   }



  save(_$event: any) {
    if (this.frmForm.valid){
      console.log('Formulario Válido!', this.f)

      if(this.id != 0){
        this.usuarioService.editar(this.id, this.frmForm.value).subscribe(res =>{
        });
      }
      else{
        this.usuarioService.adicionar(this.frmForm.value).subscribe(res =>{
        });
      }
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/usuario']));
    }
    else{
      console.log('Formulario Invalido', this.f)
    }

  }



}
