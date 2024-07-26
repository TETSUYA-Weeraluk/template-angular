import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: async () => (await import('./home.component')).HomeComponent,
  },
  {
    path: 'pokemon/:name',
    title: 'Pokemon Detail',
    loadComponent: async () =>
      (await import('./pokemon-detail/pokemon-detail.component'))
        .PokemonDetailComponent,
  },
];
