import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PokemonNameGraphQlService } from './pokemon-name-graph-ql.service';

@Component({
  selector: 'app-pokemon-name-listing',
  templateUrl: './pokemon-name-listing.component.html',
  styleUrls: ['./pokemon-name-listing.component.scss']
})
export class PokemonNameListingComponent implements OnInit {
  page = 4;
  pokemonNameList: [];

  public searchFilter: any;

  constructor(private graphQlService: PokemonNameGraphQlService) { }

  ngOnInit(): void {
    this.getPokemonResultList();
  }

  getPokemonResultList(): void {
    this.graphQlService.getPokemonNameList().subscribe((result: any) => {
      this.pokemonNameList = result?.data?.pokemon_v2_pokemon;
      console.log(JSON.stringify(this.pokemonNameList));
    });
  }
  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  search: OperatorFunction<string, readonly string[]> = (text: Observable<string>) =>
    text.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchField) => searchField.length < 2 ? [] : [])
    )

}
