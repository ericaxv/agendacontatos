import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';
import { PasswordComponent } from './components/home/password/password.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ConsultarContatosComponent } from './components/admin/consultar-contatos/consultar-contatos.component';
import { EditarContatosComponent } from './components/admin/editar-contatos/editar-contatos.component';
import { CadastarContatosComponent } from './components/admin/cadastar-contatos/cadastar-contatos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    DashboardComponent,
    ConsultarContatosComponent,
    EditarContatosComponent,
    CadastarContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
