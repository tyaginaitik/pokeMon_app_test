import { Component, OnInit } from '@angular/core';
import { PokemonNameGraphQlService } from './pokemon-name-graph-ql.service';

@Component({
  selector: 'app-pokemon-name-listing',
  templateUrl: './pokemon-name-listing.component.html',
  styleUrls: ['./pokemon-name-listing.component.scss']
})
export class PokemonNameListingComponent implements OnInit {

  pokemonNameList:[];
  constructor(private graphQlService:PokemonNameGraphQlService) { }

  ngOnInit(): void {
    this.getPokemonResultList();
  }

  getPokemonResultList():void{
    this.graphQlService.getPokemonNameList().subscribe((result: any) => {
      this.pokemonNameList = result?.data?.pokemon_v2_pokemon;
      console.log(JSON.stringify(this.pokemonNameList));
    });
  }

}
