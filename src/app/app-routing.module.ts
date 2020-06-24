import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent }     from './views/welcome';
import { MainLayoutComponent }  from './layouts/main';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: 'cards',
        loadChildren: () => import('./views/cards').then(m => m.CardsModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./views/history').then(m => m.HistoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
