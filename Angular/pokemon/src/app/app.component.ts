import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pokemons } from './features/pokemon/models/pokemons';
import { PokemonService } from './features/pokemon/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  pokemons$: Observable<Pokemons[]> = of([]);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
      this.pokemons$ = this.pokemonService.getPokemons();
  }
}
