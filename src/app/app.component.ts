import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public formulario!: FormGroup;
  card = [
    {
      url:"https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg",
      name: "Bolsonaro Presidente"
    }
  ]

  constructor() {  }


  ngOnInit(): void {}

  editar() {  }
  excluir() {  }
  }

