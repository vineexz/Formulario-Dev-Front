import { Component, Input } from '@angular/core';
@Component({
  selector: 'ap-photo',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']

})

export class CardComponent {
  @Input() url='';
}
