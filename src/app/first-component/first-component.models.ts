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
