import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Component, Input } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import {
  NzListItemComponent,
  NzListItemMetaAvatarComponent,
  NzListItemMetaComponent,
  NzListItemMetaDescriptionComponent,
  NzListItemMetaTitleComponent,
} from 'ng-zorro-antd/list';
import { IUser } from '../../../../../../models/user.model';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { ModalPermissoesComponent } from './modal-permissoes/modal-permissoes.component';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

@Component({
  selector: 'app-item-lista-usuarios',
  standalone: true,
  imports: [
    NzDividerModule,
    NzModalModule,
    NzListItemComponent,
    NzButtonModule,
    NzIconModule,
    NzListItemMetaComponent,
    NzListItemMetaAvatarComponent,
    NzListItemMetaTitleComponent,
    NzListItemMetaDescriptionComponent,
    NzAvatarModule,
  ],
  templateUrl: './item-lista-usuarios.component.html',
  styleUrl: './item-lista-usuarios.component.scss',
})
export class ItemListaUsuariosComponent {
  @Input()
  usuario!: IUser;

  constructor(private modal: NzModalService) {}

  mostrarConfirmarResetarSenha(): void {
    this.modal.warning({
      nzTitle: 'Voce quer resetar a senha?',
      nzContent: '<b style="color: red;">Não esqueça de avisar o usuario</b>',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.resetarSenha(),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  mostrarConfirmarDesativarUsuario(): void {
    this.modal.warning({
      nzTitle: 'Voce quer desativar esse Usuario?',
      nzContent: '<b style="color: red;">Não esqueça de avisar o usuario</b>',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.desativarUsuario(),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  mostrarConfirmarAtivarUsuario(): void {
    this.modal.warning({
      nzTitle: 'Voce quer ativar esse Usuario?',
      nzContent: '<b style="color: red;">Não esqueça de avisar o usuario</b>',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.ativarUsuario(),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  mostrarEditarPermissoes(): void {
    this.modal.info({
      nzTitle: `Editar Permissões de ${this.usuario.username}`,
      nzContent: ModalPermissoesComponent,
      nzWidth: 700,
      nzStyle: { margin: 0 , justifyContent: "center",alignItems: "center"},
      nzCentered: true,
      nzData: this.usuario,
      nzOkText: 'Salvar Permissões',
      nzOkType: 'primary',
      nzOnOk: () => this.mudarPermissoes(),
      nzCancelText: 'Cancelar Mudanças',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  resetarSenha() {
    console.log('Modal function called');
  }

  mudarPermissoes() {}

  desativarUsuario(){}
  ativarUsuario(){}
}
