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
  paginaActual = 1;
  limit = 20;

  constructor(private pokemonService: PokemonService) {}

  loadPokemons(): void {
    const offset = (this.paginaActual - 1) * this.limit;
    this.pokemons$ = this.pokemonService.getPokemons(this.limit,offset
    );
  }
  siguientePagina(): void {
    this.paginaActual++;
    this.loadPokemons();
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.loadPokemons();
    }
  }


  ngOnInit(): void {
    this.loadPokemons();
  }
}
