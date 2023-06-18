import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Adminguard } from "./guards/admin.guard";
import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordComponent } from "./components/home/password/password.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { CadastrarContatosComponent } from "./components/admin/cadastrar-contatos/cadastrar-contatos.component";
import { EditarContatosComponent } from "./components/admin/editar-contatos/editar-contatos.component";
import { ConsultarContatosComponent } from "./components/admin/consultar-contatos/consultar-contatos.component";

/* 
    Mapeamento de rota para os componentes.
*/

const routes : Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' }, //rota raiz do projeto
    { path : 'acessar-conta', component: LoginComponent },
    { path : 'criar-conta', component: RegisterComponent },
    { path : 'esqueci-minha-senha', component: PasswordComponent },
    { path : 'dashboard', component: DashboardComponent,  canActivate: [Adminguard] },
    { path : 'cadastrar-contatos', component: CadastrarContatosComponent, canActivate: [Adminguard] },
    { path : 'consultar-contatos', component: ConsultarContatosComponent,  canActivate: [Adminguard] },
    { path : 'editar-contatos/:id', component: EditarContatosComponent,  canActivate: [Adminguard] }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }