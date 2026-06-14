import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostListComponent } from './pages/post-list/post-list.component';



@NgModule({
  declarations: [
    PostCardComponent,
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PostListComponent]
})
export class PhotosModule { }
