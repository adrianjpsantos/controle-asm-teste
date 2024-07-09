import { IPeca } from './peca.model';
export interface IAsm {
  id: number;
  pecas: IPeca[];
  usuario: string;
  destino:
    | 'BASE'
    | 'MOD1'
    | 'MOD2'
    | 'MOD3'
    | 'MOD5'
    | 'MOD6'
    | 'MOD7'
    | 'CF01'
    | 'CF02'
    | 'CF03'
    | 'CF04'
    | 'CF05'
    | 'CF06'
    | 'CF07'
    | 'CF08'
    | 'PL02'
    | 'PL01'
    | 'OFICINA';
  data: Date;
  faturada?: boolean;
}

export class Asm implements IAsm {
  destino: 'BASE' | 'MOD1' | 'MOD2' | 'MOD3' | 'MOD5' | 'MOD6' | 'MOD7' | 'CF01' | 'CF02' | 'CF03' | 'CF04' | 'CF05' | 'CF06' | 'CF07' | 'CF08' | 'PL02' | 'PL01' | 'OFICINA' = "BASE";
  id!: number;
  pecas: IPeca[] = [];
  usuario!: string;
  data!: Date;
  faturada: boolean = false;
}
