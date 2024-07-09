import { getEstadosAsmSelect } from './../../../../../utils/lists';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  NzDatePickerModule,
  NzRangePickerComponent,
} from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { CsvService } from '../../../../../services/csv.service';
import { IPeca } from '../../../../../models/peca.model';
import { NzSelectModule } from 'ng-zorro-antd/select';

interface IPecaRelatorio extends IPeca {
  usuario: string;
  destino: string;
  data: string;
}
interface ColumnPeca {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<IPecaRelatorio> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<IPecaRelatorio> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-por-peca',
  standalone: true,
  imports: [
    NzDatePickerModule,
    FormsModule,
    NzRangePickerComponent,
    NzFormModule,
    NzButtonModule,
    NzTableModule,
    CommonModule,
    NzIconModule,
    NzSelectModule,
  ],
  templateUrl: './por-peca.component.html',
  styleUrl: './por-peca.component.scss',
})
export class PorPecaComponent {
  data: Date[] = [];
  tipo: string = 'Todos';
  listaEstadosAsm = getEstadosAsmSelect();

  fazerRelatorio() {}

  constructor(private cvsService: CsvService) {}

  listOfColumns: ColumnPeca[] = [
    {
      name: 'ASM',
      sortOrder: null,
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) => {
        if (a.asmId && b.asmId) {
          return a.asmId - b.asmId;
        } else {
          return 0;
        }
      },
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
    },
    {
      name: 'Cod. Peça',
      sortOrder: null,
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) =>
        a.codigo.localeCompare(b.codigo),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: (codigo: string, item: IPecaRelatorio) =>
        item.codigo.indexOf(codigo) !== -1,
      filterMultiple: true,
    },
    {
      name: 'Descrição',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) =>
        a.descricao.length - b.descricao.length,
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (descricao: string, item: IPeca) =>
        item.descricao.indexOf(descricao) !== -1,
    },
    {
      name: 'Qtd',
      sortOrder: null,
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) =>
        a.quantidade - b.quantidade,
      sortDirections: ['descend', 'ascend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Destino',
      sortOrder: null,
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) =>
        a.destino.localeCompare(b.destino),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'BASE', value: 'BASE' },
        { text: 'MOD1', value: 'MOD1' },
        { text: 'MOD2', value: 'MOD2' },
        { text: 'MOD3', value: 'MOD3' },
        { text: 'MOD5', value: 'MOD5' },
        { text: 'MOD6', value: 'MOD6' },
        { text: 'MOD7', value: 'MOD7' },
        { text: 'CF01', value: 'CF01' },
        { text: 'CF02', value: 'CF02' },
        { text: 'CF03', value: 'CF03' },
        { text: 'CF04', value: 'CF04' },
        { text: 'CF05', value: 'CF05' },
        { text: 'CF06', value: 'CF06' },
        { text: 'CF07', value: 'CF07' },
        { text: 'CF08', value: 'CF08' },
        { text: 'PL01', value: 'PL01' },
        { text: 'PL02', value: 'PL02' },
      ],
      filterFn: (list: string[], item: IPecaRelatorio) =>
        list.some((destino) => item.destino.indexOf(destino) !== -1),
    },
    {
      name: 'Usuario',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) =>
        a.usuario.length - b.usuario.length,
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (usuario: string, item: IPecaRelatorio) =>
        item.usuario.indexOf(usuario) !== -1,
    },
    {
      name: 'Data',
      sortOrder: 'descend',
      sortFn: (a: IPecaRelatorio, b: IPecaRelatorio) =>
        new Date(a.data).getTime() - new Date(b.data).getTime(),
      sortDirections: ['descend', 'ascend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
  ];

  listOfData: IPecaRelatorio[] = [
    {
      id: 1,
      asmId: 1,
      codigo: 'A123',
      descricao: 'Peça de reposição',
      quantidade: 50,
      destino: 'Des',
      usuario: 'joao.silva',
      data: '2024-07-01T10:00:00Z',
    },
    {
      id: 2,
      asmId: 2,
      codigo: 'B456',
      descricao: 'Componente elétrico',
      quantidade: 30,
      destino: 'CF02',
      usuario: 'maria.santos',
      data: '2024-07-02T11:30:00Z',
    },
    {
      id: 3,
      asmId: 3,
      codigo: 'C789',
      descricao: 'Ferramenta de corte',
      quantidade: 10,
      destino: 'OFICINA',
      usuario: 'carlos.pereira',
      data: '2024-07-03T14:45:00Z',
    },
    {
      id: 4,
      asmId: 4,
      codigo: 'D012',
      descricao: 'Equipamento de segurança',
      quantidade: 25,
      destino: 'PL01',
      usuario: 'ana.rodrigues',
      data: '2024-07-04T09:15:00Z',
    },
    {
      id: 5,
      asmId: 5,
      codigo: 'E345',
      descricao: 'Material de construção',
      quantidade: 40,
      destino: 'CF05',
      usuario: 'fernando.alves',
      data: '2024-07-05T13:00:00Z',
    },
  ];

  exportCsv() {
    this.cvsService.exportToCsv(this.listOfData, `historico_${Date.now()}.csv`);
  }
}
