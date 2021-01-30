import { PagadorComponent } from './components/perfis/pagador/pagador.component';
import { Login } from './components/login/login';
import { EscolherPerfilComponent } from './components/escolher-perfil/escolher-perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancadorComponent } from './components/perfis/lancador/lancador.component';

const routes: Routes = [
  {path: '', component: Login},
  {path: 'perfil', component: EscolherPerfilComponent},
  {path: 'lancador', component: LancadorComponent},
  {path: 'pagador', component: PagadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
