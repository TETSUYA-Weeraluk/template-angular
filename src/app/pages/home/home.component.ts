import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { Pokemon } from './home.type';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ParamsPagination } from '../../common/type';
import { take } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginatorModule, ProgressSpinnerModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  count: number = 0;
  page: number = 1;
  limit: number = 10;
  rowsPerPageOptions: number[] = [5, 10, 20, 50];

  isLoading: boolean = false;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchPokemons({
      page: 0,
      limit: this.limit,
    });
  }

  fetchPokemons(params: ParamsPagination) {
    this.isLoading = true;
    this.homeService
      .getPokemonList(params)
      .pipe(take(1))
      .subscribe((res) => {
        this.pokemons = res.results;
        this.count = res.count;
        this.isLoading = false;
      });
  }

  onPageChange(event: PaginatorState) {
    this.fetchPokemons({
      page: event.page ?? 0,
      limit: event.rows ?? this.limit,
    });
  }

  navigateToPokemonDetail(name: string) {
    this.router.navigate([`/pokemon/${name}`]);
  }
}
