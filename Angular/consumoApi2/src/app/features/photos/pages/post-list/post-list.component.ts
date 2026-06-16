import { Component, Input } from '@angular/core';
import { Photos } from '../../models/photos';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  @Input() photos: Photos[];
}
