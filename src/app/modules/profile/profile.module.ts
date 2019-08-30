import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsComponent } from 'src/app/shared/components/clients/clients.component';
import { ListClientComponent } from 'src/app/shared/components/clients/list-client/list-client.component';
import { UpdateClientComponent } from 'src/app/shared/components/clients/update-client/update-client.component';
import { DeleteClientComponent } from 'src/app/shared/components/clients/delete-client/delete-client.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ListClientComponent,
    UpdateClientComponent,
    DeleteClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
