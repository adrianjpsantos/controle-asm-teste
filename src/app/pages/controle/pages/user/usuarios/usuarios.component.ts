import { IUser } from './../../../../../models/user.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ItemListaUsuariosComponent } from './item-lista-usuarios/item-lista-usuarios.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { getModulosSelect } from '../../../../../utils/lists';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    NzEmptyModule,
    NzListModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    ItemListaUsuariosComponent,NzDividerModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent {
  modulo: string = 'Todos';

  listaModulos = getModulosSelect()

  listaUsuarios: IUser[] = [
    {
      username: 'Adrian',
      email: 'adr@adr.com',
      modulo: 'BASE',
    },{
      username: 'Adrian',
      email: 'adr@adr.com',
      modulo: 'MOD1',
    },
  ];
  listaUsuariosFiltrada: IUser[] = [];

  constructor(){
    this.listaUsuariosFiltrada = this.listaUsuarios
  }

  filtrarModulos() {
    if (this.modulo.toLowerCase() == 'todos') {
      this.listaUsuariosFiltrada = this.listaUsuarios;
    } else {
      if (this.listaUsuarios.length > 0) {
        this.listaUsuariosFiltrada = this.listaUsuarios.filter(
          (user) => user.modulo == this.modulo
        );
      } else {
        this.listaUsuariosFiltrada = [];
      }
    }
  }
}
