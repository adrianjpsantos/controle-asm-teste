import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgControlStatus,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  destinoValidator,
  fornecedorValidator,
} from '../../../../utils/validators';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule, DatePipe } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IPeca } from '../../../../models/peca.model';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { getFornecedoresSelect, getModulosSelect } from '../../../../utils/lists';

interface Option {
  codigo: string;
  descricao: string;
}

@Component({
  selector: 'app-nova-asm',
  standalone: true,
  imports: [
    NzCardModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    CommonModule,
    NzSelectModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzAutocompleteModule,
    NzPopconfirmModule,
  ],
  providers: [DatePipe],
  templateUrl: './nova-asm.component.html',
  styleUrl: './nova-asm.component.scss',
})
export class NovaAsmComponent {
  listaModulos = getModulosSelect();
  listaFornecedor = getFornecedoresSelect()
  novaAsmGroup = new FormBuilder().group({
    destino: ['', [Validators.required, destinoValidator()]],
    usuario: ['', [Validators.required]],
    periodoFechado: [true, [Validators.required]],
    temNotaFiscal: [false, [Validators.required]],
    foraDeEstoque: [false, [Validators.required]],
    notaFiscal: [0, [Validators.required]],
    fornecedor: ['', [Validators.required, fornecedorValidator()]],
    data: [getDateNow(), [Validators.required]],
    desPeca: [{ value: '', disabled: true }, [Validators.required]],
    codPeca: ['', [Validators.required]],
    qtdPeca: [0, Validators.required],
  });

  temNotaFiscal() {
    const temNotaFiscal = this.novaAsmGroup.get('temNotaFiscal');
    if (temNotaFiscal) return temNotaFiscal.value as boolean;
    else return false;
  }

  periodoFechado() {
    const periodoFechado = this.novaAsmGroup.get('periodoFechado');
    if (periodoFechado) return periodoFechado.value as boolean;
    else return false;
  }

  listaPecas: IPeca[] = [];

  pecasInfos: Option[] = [
    {
      codigo: 'br6-3456.900',
      descricao: 'Cat Cabo',
    },
    { codigo: '0067878', descricao: 'Cabo Ponsse' },
  ];

  selectedCodPeca(codigo: string) {
    const peca = this.pecasInfos.find((peca) => peca.codigo == codigo);

    if (!peca) return;

    console.info(peca);
    this.novaAsmGroup.get('desPeca')?.setValue(peca.descricao);
  }

  disabledAddButton(): boolean {
    const cod = this.novaAsmGroup.get('codPeca')?.value;
    const desc = this.novaAsmGroup.get('desPeca')?.value;
    const qtd = this.novaAsmGroup.get('qtdPeca')?.value;

    return !cod || !desc || !qtd || qtd <= 0;
  }

  adicionarPeca() {
    const cod = this.novaAsmGroup.get('codPeca')?.value;
    const desc = this.novaAsmGroup.get('desPeca')?.value;
    const qtd = this.novaAsmGroup.get('qtdPeca')?.value;

    if (!cod || !desc || !qtd) return;

    const index = this.listaPecas.findIndex((peca) => peca.codigo === cod);

    if (index !== -1) {
      this.listaPecas[index].quantidade =
        Number(this.listaPecas[index].quantidade) + Number(qtd);
    } else {
      const peca: IPeca = { codigo: cod, descricao: desc, quantidade: qtd };
      this.listaPecas = [...this.listaPecas, peca];

      this.novaAsmGroup.get('desPeca')?.reset();
      this.novaAsmGroup.get('qtdPeca')?.reset();
      this.novaAsmGroup.get('codPeca')?.reset();
    }
  }

  removerPeca(cod: string) {
    this.listaPecas = this.listaPecas.filter((peca) => peca.codigo !== cod);
  }
}

function getDateNow(): string {
  const datePipe = new DatePipe('pt-BR');
  const now = new Date();
  return datePipe.transform(now, 'dd/MM/yyyy HH:mm:ss') || '';
}
