import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { FormLoginComponent } from 'src/app/shared/components/login/form-login/form-login.component';
import { RegisterClientComponent } from 'src/app/shared/components/login/form-login/register-client/register-client.component';
import { ChangePasswordComponent } from 'src/app/shared/components/login/form-login/change-password/change-password.component';
import { GamesComponent } from 'src/app/shared/components/games/games.component';
import { ListGamesComponent } from 'src/app/shared/components/games/list-games/list-games.component';
import { CreateGameComponent } from 'src/app/shared/components/games/create-game/create-game.component';
import { UpdateGameComponent } from 'src/app/shared/components/games/update-game/update-game.component';
import { DeleteGameComponent } from 'src/app/shared/components/games/delete-game/delete-game.component';
import { ImagesComponent } from 'src/app/shared/components/images/images.component';
import { UploadImagesComponent } from 'src/app/shared/components/images/upload-images/upload-images.component';
import { DeleteImagesComponent } from 'src/app/shared/components/images/delete-images/delete-images.component';
import { DownloadImageComponent } from 'src/app/shared/components/images/download-image/download-image.component';
import { ClientsComponent } from 'src/app/shared/components/clients/clients.component';
import { ListClientComponent } from 'src/app/shared/components/clients/list-client/list-client.component';
import { UpdateClientComponent } from 'src/app/shared/components/clients/update-client/update-client.component';
import { DeleteClientComponent } from 'src/app/shared/components/clients/delete-client/delete-client.component';

@NgModule({
  declarations: [
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
    DeleteClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
