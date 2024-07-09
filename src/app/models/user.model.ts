export interface IUser {
  id?: string;
  username: string;
  password?: string;
  email: string;
  modulo:
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
}
