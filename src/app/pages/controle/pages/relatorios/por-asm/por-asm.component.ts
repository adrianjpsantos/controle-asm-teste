import { getEstadosAsmSelect } from './../../../../../utils/lists';
import { IAsm } from './../../../../../models/asm.model';
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
import { RouterLink } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';

interface ColumnAsm {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<IAsm> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<IAsm> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-por-asm',
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
    RouterLink,NzSelectModule
  ],
  templateUrl: './por-asm.component.html',
  styleUrl: './por-asm.component.scss',
})
export class PorAsmComponent {
  data: Date[] = [];
  tipo: string = 'Todos';
  selectEstadoAsm = getEstadosAsmSelect();

  constructor(private cvsService: CsvService) {}

  listOfColumns: ColumnAsm[] = [
    {
      name: 'ASM',
      sortOrder: null,
      sortFn: (a: IAsm, b: IAsm) => a.id - b.id,
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: null,
    },
    {
      name: 'Qtd. Peças',
      sortOrder: null,
      sortFn: (a: IAsm, b: IAsm) => a.pecas.length - b.pecas.length,
      sortDirections: ['descend', 'ascend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
    {
      name: 'Destino',
      sortOrder: null,
      sortFn: (a: IAsm, b: IAsm) =>
        a.destino.toString().localeCompare(b.destino.toString()),
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
      filterFn: (list: string[], item: IAsm) =>
        list.some((destino) => item.destino.toString().indexOf(destino) !== -1),
    },
    {
      name: 'Usuario',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: IAsm, b: IAsm) => a.usuario.localeCompare(b.usuario),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (usuario: string, item: IAsm) =>
        item.usuario.indexOf(usuario) !== -1,
    },
    {
      name: 'Data',
      sortOrder: 'descend',
      sortFn: (a: IAsm, b: IAsm) =>
        new Date(a.data).getTime() - new Date(b.data).getTime(),
      sortDirections: ['descend', 'ascend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Ação',
      sortOrder: null,
      sortFn: null,
      sortDirections: [],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
  ];

  listOfData: IAsm[] = [
    {
      id: 1,
      pecas: [],
      destino: 'CF01',
      usuario: 'joao.silva',
      data: new Date('2024-07-01T10:00:00Z'),
    },
    {
      id: 2,
      pecas: [],
      destino: 'MOD2',
      usuario: 'maria.santos',
      data: new Date('2024-07-02T11:30:00Z'),
    },
    {
      id: 3,
      pecas: [],
      destino: 'MOD7',
      usuario: 'carlos.pereira',
      data: new Date('2024-07-03T14:45:00Z'),
    },
    {
      id: 4,
      pecas: [],
      destino: 'PL01',
      usuario: 'ana.rodrigues',
      data: new Date('2024-07-04T09:15:00Z'),
    },
    {
      id: 5,
      pecas: [],
      destino: 'MOD5',
      usuario: 'fernando.alves',
      data: new Date('2024-07-05T13:00:00Z'),
    },
  ];

  fazerRelatorio() {
    this.addFilters(this.listOfData);
  }

  addFilters(lista: IAsm[]) {
    for (let column of this.listOfColumns) {
      const index = this.listOfColumns.indexOf(column);

      if (column.name == 'ASM') {
        column.listOfFilter = lista.map((asm) => {
          return { text: asm.id, value: asm.id } as any;
        });
      }

      if (column.name == 'Usuario') {
        column.listOfFilter = lista.map((asm) => {
          return { text: asm.usuario, value: asm.usuario } as any;
        });
      }

      if (column.name == 'Destino') {
        column.listOfFilter = lista.map((asm) => {
          return { text: asm.destino, value: asm.destino } as any;
        });
      }

      this.listOfColumns[index] = column;
    }
  }

  tableEmpty() {
    return this.listOfData.length <= 0;
  }

  exportCsv() {
    this.cvsService.exportToCsv(this.listOfData, `historico_${Date.now()}.csv`);
  }
}
