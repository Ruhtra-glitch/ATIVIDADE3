import { ItemCatalogo } from "../interfaces/IItemCatalogo";

export class CatalogoGenerico<T extends ItemCatalogo> {
  private produtos: T[] = [];

  adicionarProduto(produto: T) {
    this.produtos.push(produto);
  }

  listarProdutos(): T[] {
    return this.produtos;
  }

  buscarPorNome(nome: string): T[] {
    return this.produtos.filter(p => 
      p.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
}
