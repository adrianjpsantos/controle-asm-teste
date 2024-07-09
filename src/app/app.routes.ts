import { MudarSenhaComponent } from './pages/controle/pages/user/mudar-senha/mudar-senha.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ControleComponent } from './pages/controle/controle.component';
import { PorPecaComponent } from './pages/controle/pages/relatorios/por-peca/por-peca.component';
import { PorAsmComponent } from './pages/controle/pages/relatorios/por-asm/por-asm.component';
import { InicioComponent } from './pages/controle/pages/inicio/inicio.component';
import { AsmComponent } from './pages/controle/pages/asm/asm.component';
import { NovaAsmComponent } from './pages/controle/pages/nova-asm/nova-asm.component';
import { UserComponent } from './pages/controle/pages/user/user.component';
import { UsuariosComponent } from './pages/controle/pages/user/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'controle',
    component: ControleComponent,
    children: [
      { path: '', component: InicioComponent },
      {
        path: 'relatorios',
        children: [
          { path: 'por-peca', component: PorPecaComponent },
          { path: 'por-asm', component: PorAsmComponent },
        ],
      },
      { path: 'asm/:id', component: AsmComponent },
      { path: 'asm-nova', component: NovaAsmComponent },
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: '',
            component: UsuariosComponent,
          },
          { path: 'mudar-senha',component: MudarSenhaComponent },
        ],
      },
    ],
  },
];
