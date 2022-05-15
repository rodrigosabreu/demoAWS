export class Produtos {
  produtos: Produto[]
}

export class Produto {
  id!: string;
  nome!: string;
  valor!: string;
  promocao!: string;
  valorPromo!: string;
  imagem!: string;
  ativo!: boolean;
}
