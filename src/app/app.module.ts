import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { ProfileModule } from 'src/app/modules/profile/profile.module';

import { ListGamesComponent } from 'src/app/shared/components/games/list-games/list-games.component';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { FormLoginComponent } from 'src/app/shared/components/login/form-login/form-login.component';
import { RegisterClientComponent } from 'src/app/shared/components/login/register-client/register-client.component';
import { ChangePasswordComponent } from 'src/app/shared/components/login/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListGamesComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterClientComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    ProfileModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
