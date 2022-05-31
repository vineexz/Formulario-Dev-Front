import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formulario!: FormGroup;
  private item = [] = [];
  public items = [] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['',[Validators.minLength(2)]],
      email: ['',[Validators.email]],
      cidade: ['',[Validators.minLength(4)]],
      formacao: ['',[Validators.minLength(3)]],
      tecnologias: ['',[Validators.minLength(4)]]
    })
  }
  cadastrar() {

    if (!!this.formulario.valid) {
      console.log("Formulário inválido");
      return
    }
    console.log("Formulário válido", this.formulario.value);
  }


}
