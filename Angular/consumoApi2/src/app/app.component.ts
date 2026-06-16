import { ChangeDetectorRef, Component } from '@angular/core';
import { Photos } from './features/photos/models/photos';
import { PhotosServiceService } from './features/photos/services/photos-service.service';


@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  photos: Photos[] = [];

  constructor(
    private photosService: PhotosServiceService,
    private cdr: ChangeDetectorRef,
  ){}

  onClick(){
    this.photosService.getPhotos().subscribe({
      next: (data)=>{
        this.photos = data;
        this.cdr.detectChanges();
      },
      error: (err)=>{
        console.error('FALLÓ, REVISE:', err);
      },
      complete: ()=>{
        alert("ok");
      },
    });
  }
}
