import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from 'src/app/shared/components/games/games.component';
import { CreateGameComponent } from 'src/app/shared/components/games/create-game/create-game.component';
import { UpdateGameComponent } from 'src/app/shared/components/games/update-game/update-game.component';
import { DeleteGameComponent } from 'src/app/shared/components/games/delete-game/delete-game.component';
import { ImagesComponent } from 'src/app/shared/components/images/images.component';
import { UploadImagesComponent } from 'src/app/shared/components/images/upload-images/upload-images.component';
import { DeleteImagesComponent } from 'src/app/shared/components/images/delete-images/delete-images.component';
import { DownloadImageComponent } from 'src/app/shared/components/images/download-image/download-image.component';

@NgModule({
  declarations: [
    GamesComponent,
    CreateGameComponent,
    UpdateGameComponent,
    DeleteGameComponent,
    ImagesComponent,
    UploadImagesComponent,
    DeleteImagesComponent,
    DownloadImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
