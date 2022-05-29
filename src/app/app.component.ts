import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public formulario!: FormGroup;
  sumitted = false;
  title = 'Cadastro-DEV';
  card = [
    {
      url:"https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg",
      name: "Bolsonaro Presidente"
    }
  ]

  constructor(
    private fb: FormBuilder) {  }


  ngOnInit(): void {
      this.formulario = this.fb.group({
        nome: [''],
        email: [''],
        cidade: [''],
        formacao: [''],
        tecnologias: ['']

      })
   }

  editar() {  }
  excluir() {  }

  cadastrar() {
    this.sumitted = true;
    if (!this.formulario.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.formulario.value);
  }
  }

