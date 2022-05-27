import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro-DEV';
  
  card = [
    {
      url:"https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg",
    }
  ]


  cadastrar() {

    let nome: string = (<HTMLInputElement>document.getElementById("nome")).value
    let email: string = (<HTMLInputElement>document.getElementById("email")).value
    let cidade: string = (<HTMLInputElement>document.getElementById("cidade")).value
    let formacao: string = (<HTMLInputElement>document.getElementById("formacao")).value
    let tecnologias: string = (<HTMLInputElement>document.getElementById("tecnologias")).value


  if(nome == "") {
    alert("Preencha todos os campos!")
  } else if(email = "")
    alert("Preencha todos os campos!")
  else if(cidade = "")
    alert("Preencha todos os campos!")
  else if(formacao = "")
    alert("Preencha todos os campos!")
  else if(tecnologias = "")
    alert("Preencha todos os campos!")
    else {
      alert('voce clicou em cadastrar')
    }

  }
}
