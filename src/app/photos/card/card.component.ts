import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'ap-photo',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']

})

export class CardComponent implements OnInit{

  constructor() {}
  ngOnInit(){

  }
  @Input() url='';
}
