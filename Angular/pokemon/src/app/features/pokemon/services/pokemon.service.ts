import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Pokemons, PokemonResponse } from "../models/pokemons";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<Pokemons[]> {

    return this.http.get<PokemonResponse>(
      `${this.api}?limit=${limit}&offset=${offset}`
    ).pipe(
      switchMap(response => {

        const requests = response.results.map(pokemon =>
          this.http.get<Pokemons>(pokemon.url)
        );

        return forkJoin(requests);

      }),
      map(wi => wi.sort((a, b) => a.id - b.id)),
      catchError(error => {
        console.error('Error', error);
        return throwError(() => error);
      })

    );
  }
}
