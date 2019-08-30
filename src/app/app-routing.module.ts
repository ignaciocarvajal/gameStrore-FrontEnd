import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/components/login/login.component';
import { ListGamesComponent } from './shared/components/games/list-games/list-games.component';
import { RegisterClientComponent } from './shared/components/login/register-client/register-client.component';
import { ChangePasswordComponent } from './shared/components/login/change-password/change-password.component';
import { GamesComponent } from './shared/components/games/games.component';
import { ClientsComponent } from './shared/components/clients/clients.component';
import { AuthGuard } from './model/objects/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: ListGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterClientComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
