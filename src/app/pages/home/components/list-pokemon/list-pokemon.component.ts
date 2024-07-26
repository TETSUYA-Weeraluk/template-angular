import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../../home.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  @Input() pokemons: PokemonDetail = {
    types: [],
    stats: [],
  };

  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
}
