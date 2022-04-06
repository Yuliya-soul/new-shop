export enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length,
}
export interface IBook {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  category: FileAccess;
  isAvailable?: boolean;
}
export const book1: IBook = {
  id: 1,
  name: 'Alice',
  description: '',
  price: 0,
  category: FileAccess.None,
  isAvailable: false,
};
export const book2: IBook = {
  id: 2,
  name: 'Tom',
  description: '',
  price: 0,
  category: FileAccess.Read,
  isAvailable: false,
};
