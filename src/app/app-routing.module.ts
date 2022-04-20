import { ResultComponent } from './search/result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: ResultComponent },
  { path: 'result', component: ResultComponent },
  { path: 'edit', component: AdminPageComponent },
  { path: 'autentication', component: AutenticazioneComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
