import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro-DEV'
  card = [
    {
      url:"https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg",
      name: "Bolsonaro Presidente"
    }
  ]
}
