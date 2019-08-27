import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { ListGamesComponent } from './shared/components/games/list-games/list-games.component';
import { RegisterClientComponent } from './shared/components/login/register-client/register-client.component';
import { ChangePasswordComponent } from './shared/components/login/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: ListGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterClientComponent },
  { path: 'change-password', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
