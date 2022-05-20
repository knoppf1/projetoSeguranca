import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-view',
  templateUrl: './cadastro-view.component.html',
  styleUrls: ['./cadastro-view.component.scss']
})
export class CadastroViewComponent implements OnInit {
  id: number;
  frmForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.frmForm = this.createForm();
  }


  createForm(): FormGroup {
    return this.fb.group({
     id : [this.id],
     nome : [''],
     cpf : [''],
     dataNascimento : [''],
     email: [''],
     telefone : [''],
     endereco : [''],
     latitude : [0],
     longitude : [0],
    });
  }

  save($event: any){
    console.log('Formulario', this.frmForm.value)
    this.cadastroService.adicionar(this.frmForm.value).subscribe(res =>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['view']))
    })
  }

}
