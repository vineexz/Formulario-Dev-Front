import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string | undefined
  public formulario!: UntypedFormGroup;
  @Input() templateForm: boolean = true;

  card = [
    {
      url:"https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg",
      name: "Bolsonaro Presidente",
      cidade: "Maringa",
      formacao: "Faculdade cidade verde",
      tecnologias: "Angular, Jquey, Vue"
    }
  ]

  constructor() {  }


  ngOnInit(): void {}

  editar() {}

  excluir() {
    this.templateForm = false
   }
  }

