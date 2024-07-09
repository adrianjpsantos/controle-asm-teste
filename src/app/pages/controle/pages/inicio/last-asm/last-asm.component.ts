import { Component } from '@angular/core';
import { IAsm } from '../../../../../models/asm.model';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn, NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule, NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
  selector: 'app-last-asm',
  standalone: true,
  imports: [NzDatePickerModule, FormsModule,NzRangePickerComponent,NzFormModule,NzButtonModule,NzTableModule, CommonModule,NzIconModule],
  templateUrl: './last-asm.component.html',
  styleUrl: './last-asm.component.scss'
})
export class LastAsmComponent {
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
      filterMultiple: true,
    },
    {
      name: 'Destino',
      sortOrder: null,
      sortFn: (a: IAsm, b: IAsm) => a.destino.toString().localeCompare(b.destino.toString()),
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
  ];

  listOfData: IAsm[] = [];
}
