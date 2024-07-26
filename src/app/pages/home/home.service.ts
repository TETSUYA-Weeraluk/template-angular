import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ParamsPagination } from '../../common/type';
import { PokemonDetail, PokemonResponse } from './home.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private pageSubject = new BehaviorSubject<number>(1);
  private limitSubject = new BehaviorSubject<number>(10);

  constructor(private http: HttpClient) {}

  setPage(page: number): void {
    this.pageSubject.next(page);
  }

  setLimit(limit: number): void {
    this.limitSubject.next(limit);
  }

  getPokemonList(params: ParamsPagination): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: params.limit,
        offset: params.page * params.limit,
      },
    });
  }

  getPokemonByName(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}
