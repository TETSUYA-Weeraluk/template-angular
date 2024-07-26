import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from '../home.type';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [ButtonModule, CommonModule, ProgressSpinnerModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  namePokemon: string = '';
  pokemonDetail: PokemonDetail | undefined;
  isLoading = true;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.namePokemon = params['name'];
    });

    this.homeService.getPokemonByName(this.namePokemon).subscribe((res) => {
      this.pokemonDetail = {
        stats: res.stats,
        types: res.types,
      };
      this.isLoading = false;
    });
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
