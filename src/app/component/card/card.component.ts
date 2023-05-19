import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() country: string = '';
 @Input() quantity: number = 0;
 @Input() region: string = '';
 @Input() capital: string = '';
 @Input() image: string = '';
 @Input() isDarkMode:boolean = false;
}
