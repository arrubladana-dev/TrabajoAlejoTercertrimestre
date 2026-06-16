import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PostCardComponent,
    PostListComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports:[PostListComponent]
})
export class PhotosModule { }
