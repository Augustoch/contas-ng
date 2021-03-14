import { AdministradorComponent } from './components/perfis/administrador/administrador.component';
import { AuthGuard } from './util/auth-guard';
import { PagadorComponent } from './components/perfis/pagador/pagador.component';
import { Login } from './components/login/login';
import { EscolherPerfilComponent } from './components/escolher-perfil/escolher-perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancadorComponent } from './components/perfis/lancador/lancador.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full',},
  {path: 'login', component: Login,},
  {path: 'perfil', component: EscolherPerfilComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdministradorComponent, canActivate: [AuthGuard]},
  {path: 'lancador', component: LancadorComponent, canActivate: [AuthGuard]},
  {path: 'pagador', component: PagadorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
