import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss']
})
export class AcessoComponent implements OnInit {

  form: FormGroup;
  msgErro : string = "";
  submited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(){
    return this.fb.group({
      apelido: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  get f(){
    return this.form.controls;
  }

  onLogin(){
    console.log('Formulario Login', this.form.value)
    this.submited = true;
    if(this.form.valid){
      this.auth.login(this.form.value).subscribe(res => {
        // TODO: validacao
        if(res.idUser == 0 ){
          this.msgErro = "Usuário ou senha inválidos!";
        }else{
          this.msgErro = "";
          this.router.navigate(['/']);
        }

      });
    }
  }

}
