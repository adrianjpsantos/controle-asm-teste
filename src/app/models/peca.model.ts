export interface IPeca {
  asmId?: number | undefined;
  id?: number | undefined;
  codigo: string;
  descricao: string;
  quantidade: number;
}

export class Peca implements IPeca {
  asmId!: number;
  id!: number;
  codigo!: string;
  descricao!: string;
  quantidade!: number;
}
