import { Component, Input } from '@angular/core';
import { Pokemons } from '../../models/pokemons';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  @Input() pokemons: Pokemons[] | null = [];

}
