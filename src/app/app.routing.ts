import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordComponent } from "./components/home/password/password.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";

/* 
    Mapeamento de rota para os componentes.
*/

const routes : Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' }, //rota raiz do projeto
    { path : 'acessar-conta', component: LoginComponent },
    { path : 'criar-conta', component: RegisterComponent },
    { path : 'esqueci-minha-senha', component: PasswordComponent },
    { path : 'dashboard', component: DashboardComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }