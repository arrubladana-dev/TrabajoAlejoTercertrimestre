import { Component, Input } from '@angular/core';
import { Pokemons } from '../../models/pokemons';


@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemons;
}
