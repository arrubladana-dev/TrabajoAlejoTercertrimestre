import { Component, Input } from '@angular/core';
import { Photos } from '../../models/photos';

@Component({
  selector: 'app-post-card',
  standalone: false,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() photos: Photos;

}
