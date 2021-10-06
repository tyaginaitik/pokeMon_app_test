import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

//Types
import { IPokemonNameResultList } from './IPokemonNameResultList';

@Injectable({
  providedIn: 'root'
})
export class PokemonNameGraphQlService {

  constructor(private apollo: Apollo) { }

  getPokemonNameList(): Observable<any> {
    const queryResponse = this.apollo.query({
      query: gql`
      {
        pokemon_v2_pokemon(limit: 20, offset: 0, distinct_on: name, order_by: {name: asc}) {
          id
          height
          name
          order
          weight
          pokemon_v2_pokemonabilities {
            ability_id
            id
            pokemon_v2_ability {
              name
            }
          }
        }
      }
      `
    }).pipe(shareReplay(1));
    return queryResponse;
  }
}
