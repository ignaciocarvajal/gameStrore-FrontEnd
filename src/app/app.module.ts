import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './shared/login-component/login-component.component';
import { FormLoginComponentComponent } from './shared/components/login-component/form-login-component/form-login-component.component';
import { LoginComponent } from './shared/components/login/login.component';
import { FormLoginComponent } from './shared/components/login/form-login/form-login.component';
import { RegisterClientComponent } from './shared/components/login/form-login/register-client/register-client.component';
import { ChangePasswordComponent } from './shared/components/login/form-login/change-password/change-password.component';
import { GamesComponent } from './shared/components/games/games.component';
import { ListGamesComponent } from './shared/components/games/list-games/list-games.component';
import { CreateGameComponent } from './shared/components/games/create-game/create-game.component';
import { UpdateGameComponent } from './shared/components/games/update-game/update-game.component';
import { DeleteGameComponent } from './shared/components/games/delete-game/delete-game.component';
import { ImagesComponent } from './shared/components/images/images.component';
import { UploadImagesComponent } from './shared/components/images/upload-images/upload-images.component';
import { DeleteImagesComponent } from './shared/components/images/delete-images/delete-images.component';
import { DownloadImageComponent } from './shared/components/images/download-image/download-image.component';
import { ClientsComponent } from './shared/components/clients/clients.component';
import { ListClientComponent } from './shared/components/clients/list-client/list-client.component';
import { UpdateClientComponent } from './shared/components/clients/update-client/update-client.component';
import { DeleteClientComponent } from './shared/components/clients/delete-client/delete-client.component';
import { RolesComponent } from './shared/components/roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    FormLoginComponentComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterClientComponent,
    ChangePasswordComponent,
    GamesComponent,
    ListGamesComponent,
    CreateGameComponent,
    UpdateGameComponent,
    DeleteGameComponent,
    ImagesComponent,
    UploadImagesComponent,
    DeleteImagesComponent,
    DownloadImageComponent,
    ClientsComponent,
    ListClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
