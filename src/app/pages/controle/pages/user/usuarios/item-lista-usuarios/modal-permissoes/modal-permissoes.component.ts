import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';

class Permissoes {
  asm = [
    { label: 'Criar', value: 'ASM:Criar' },
    { label: 'Editar', value: 'ASM:Editar' },
    { label: 'Apagar', value: 'ASM:Apagar' },
    { label: 'Ver Todas', value: 'ASM:VerTodos' },
    { label: 'Ver Proprias e do Modulo', value: 'ASM:VerPropriosEModulo' },
  ];

  admin = [
    { label: 'Criar Usuario', value: 'ADMIN:CriarUsuario ' },
    {
      label: 'Editar Permissões Usuario',
      value: 'ADMIN:EditarPermissõesUsuario',
    },
    { label: 'Desativar Usuario', value: 'ADMIN:DesativarUsuario' },
    {
      label: 'Resetar senha dos Usuarios',
      value: 'ADMIN:ResetarSenhaUsuarios',
    },
  ];

  comum = [
    { label: 'Mudar Propria Senha', value: 'COMUM:MudarPropriaSenha ' },
    { label: 'Mudar Propria Foto', value: 'ADMIN:MudarPropriaFoto' },
  ];
}

@Component({
  selector: 'app-modal-permissoes',
  standalone: true,
  imports: [NzDividerModule, NzCheckboxModule, FormsModule],
  templateUrl: './modal-permissoes.component.html',
  styleUrl: './modal-permissoes.component.scss',
})
export class ModalPermissoesComponent {
  permissoes = new Permissoes();
}
