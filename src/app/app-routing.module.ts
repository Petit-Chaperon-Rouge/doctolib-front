import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfirmiereListComponent } from './infirmiere-list/infirmiere-list.component';

const routes: Routes = [
  // redirection
  // { path: '', redirectTo: 'infirmieres', pathMatch: 'full' },
  // Routes pour la section infirmiere
  {
    path: 'infirmieres',
    children: [
      { path: '', component: InfirmiereListComponent, pathMatch: 'full' },
      //     { path: 'new', component: NewArticleComponent },
      //     { path: ':id', component: ArticlePageComponent },
    ],
  },
  // Routes pour les articles
  // {
  //   path: 'articles',
  //   children: [
  //     { path: '', component: ArticleListComponent, pathMatch: 'full' },
  //     { path: 'new', component: NewArticleComponent },
  //     { path: ':id', component: ArticlePageComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
