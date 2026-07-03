import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PokemonListComponent
  ]
})
export class PokemonModule { }
