import { AdministradorModule } from './components/perfis/administrador/administrador.module';
import { SpinnerContainerModule } from './components/shared/spinner/spinner-container.module';
import { PagadorModule } from './components/perfis/pagador/pagador.module';
import { LancadorModule } from './components/perfis/lancador/lancador.module';
import { EscolherPerfilModule } from './components/escolher-perfil/escolher-perfil.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ViewPDFModule } from './components/shared/pdf/view-pdf.module';
import { RequestInterceptorModule } from './util/interceptors/erro/request-interceptor.module';
import { JWTInterceptorModule } from './util/interceptors/jwt/jwt-interceptor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    RouterModule,
    EscolherPerfilModule,
    LancadorModule,
    PagadorModule,
    MatProgressSpinnerModule,
    ViewPDFModule,
    RequestInterceptorModule,
    JWTInterceptorModule,
    SpinnerContainerModule,
    AdministradorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
